import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productSerive: ProductService) {
  }

  addProduct(form: NgForm) {
    this.productSerive.postData(form.value).subscribe(data => {
      console.log(data);
    });
  }



  ngOnInit() {
  }

}
