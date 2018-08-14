import { Component, OnInit, Input } from '@angular/core';

import { Product, ShoppingCart } from '../../models';
import { ProductService, ShoppingCartService } from '../../services';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('showActions') showActions = true;
  @Input('shoppingCart') shoppingCart: ShoppingCart;

  constructor(private _cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart() {
    this._cartService.addToCart(this.product);
  }
}
