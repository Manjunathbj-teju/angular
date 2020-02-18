import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
