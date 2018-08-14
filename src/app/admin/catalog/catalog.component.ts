import { Component, OnInit,  ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';

import { ProductService } from '../../services';
import { Product } from '../../models';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: any;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this._productService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(products => {
      this.products = products;
    });
  }

  delete(product: Product): void {
    this._productService.delete(product.title);
  }
}
