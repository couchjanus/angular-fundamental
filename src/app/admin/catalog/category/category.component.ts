import { Component, OnInit,  ViewChild } from '@angular/core';

import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';

import { HttpErrorResponse } from '@angular/common/http';

import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(private _categoryService: CategoryService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  deleteCategory(category: Category): void {
    this._categoryService.deleteCategory(category.id)
      .subscribe( data => {
        this.categories = this.categories.filter(c => c !== category);
      });
  }
 
  ngOnInit() {
    this._categoryService
        .getAllCategories()
        .subscribe((data: Category[]) => {
            this.categories = data;
          },
          // err => {
          //   console.log('Error occured.');
          // }
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('Client-side error occured.');
            } else {
              console.log('Server-side error occured.');
            }
          }
        );
    }
}
