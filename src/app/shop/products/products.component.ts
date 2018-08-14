import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService, ProductService } from '../../services';
import { Product, ShoppingCart } from '../../models';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  // products: Product[] = [];
  products: any;
  filteredProducts: Product[] = [];
  cart$: Observable<ShoppingCart>;
  category: string;

  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService,
    private shoppingCartService: ShoppingCartService) { }

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

}
