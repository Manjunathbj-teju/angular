import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productService: any;
  products: Products[];

  constructor() { }

  getProduct() {
    this.productService.getData().subscribe( response => {
      console.log('response from get method', response);
      this.products = response.products;
    }, err => {
      console.log(err);
    });
  }



  ngOnInit() {
  }

}
