import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'charset': 'utf-8'}) };

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000';

  public getAllCategories() {
    return this.http
    .get(`${this.url}/categories`);
  }

  public addCategory(obj) {
    return this.http
    .post(`${this.url}/categories`, obj);
  }

  public createCategory(category: Category) {
    return this.http
      .post(`${this.url}/categories`, JSON.stringify(category), this._options);
  }
  public updateCategory(category: Category) {
    return this.http
      .put(`${this.url}/categories/${category.id}`, JSON.stringify(category), this._options);
  }

  public deleteCategory(id: number) {
    return this.http
      .delete(`${this.url}/categories/${id}`);
  }

  public getCategoryById(id: number) {
    return this.http
      .get<Category>(`${this.url}/categories/${id}`);
  }

}
