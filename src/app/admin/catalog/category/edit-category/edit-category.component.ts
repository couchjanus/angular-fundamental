import { Component, OnInit,  ViewChild } from '@angular/core';
import { Category } from '../../../../models/category';
import { CategoryService } from '../../../../services/category.service';
import { FormGroup,  FormBuilder,  Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {first} from 'rxjs/operators';
// import {throwError} from 'rxjs';  // Angular 6/RxJS 6

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})

export class EditCategoryComponent implements OnInit {

  category: Category;

  // name: AbstractControl;

  categoryForm: FormGroup;

  constructor(private _categoryService: CategoryService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  onSubmit() {
    this._categoryService.updateCategory(this.categoryForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['admin/categories']);
        },
        error => {
          alert(error);
        });
  }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
    });
    this.route.params.subscribe(params => {
    this._categoryService.getCategoryById(params['id'])
      .subscribe( data => {
        this.categoryForm.setValue(data);
      });
    });
  }
}
