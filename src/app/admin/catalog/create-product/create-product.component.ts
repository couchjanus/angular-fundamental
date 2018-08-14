import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { Product } from '../../../models';
import { ProductService } from '../../../services';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
  }

  newProduct(): void {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
    this._productService.create(this.product);
    this.product = new Product();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
