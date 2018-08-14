import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Product, KeyedProduct } from '../models';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _dbPath = '/products';
  private _productsRef: AngularFireList<Product> = null;

  constructor(private _db: AngularFireDatabase) {
    this._productsRef = _db.list(this._dbPath);
  }

  create(product) {
    this._productsRef.push(product);
  }

  getAll(): AngularFireList<Product> {
    return this._productsRef;
  }
  get(productId) {
    return `${this._productsRef}/${productId}`;
  }

  update(key: string, value: any): void {
    this._productsRef.update(key, value).catch(error => this.handleError(error));
  }

  delete(key: string): void {
    this._productsRef.remove(key).catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
