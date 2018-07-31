import { Component, OnInit,  ViewChild } from '@angular/core';
// import { Category } from '../../../../models/category';
import { CategoryService } from '../../../../services/category.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import {throwError} from 'rxjs';  // Angular 6/RxJS 6

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})

export class AddCategoryComponent implements OnInit {

  // category: Category;

  // name: AbstractControl;

  categoryForm: FormGroup;

  // constructor(fb: FormBuilder) {
  //   this.categoryForm = fb.group({
  //     'name': ['Cool Cat']
  //   });
  // }

  constructor(private _categoryService: CategoryService, private fb: FormBuilder, private router: Router) {
  //   this.createForm();
  //   this.name = this.categoryForm.controls['name'];
  }

  // createForm() {
  //   this.categoryForm = this.fb.group({
  //     name: ['', Validators.required ]
  //  });
  // }

  // public createCategory(name) {
  //   this._categoryService
  //     .createCategory(name)
  //     .subscribe(
  //      data => {
  //       this.router.navigateByUrl('/admin/categories');
  //       return true;
  //      },
  //      error => {
  //        console.error('Error saving category!');
  //        return throwError(error);  // Angular 6/RxJS 6
  //      }
  //   );
  // }

  // onSubmit(form: any): void {
  //   console.log('You submitted new cats value:', form);
  // }

  // onSubmit(value: string): void {
  //   console.log('You submitted new cats value:', value);
  // }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      id: [],
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    this._categoryService.createCategory(this.categoryForm.value)
      .subscribe( data => {
        this.router.navigateByUrl('/admin/categories');
      });
  }
}

