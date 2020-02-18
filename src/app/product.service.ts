import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  api: `http://localhost:8080`;

  postData(product): Observable <any> {
    return this.http.post<any>(`${this.api}/products/add-product`, product);
  }


 getData(): Observable <any> {
 return this.http.get<any>(`${this.api}/products/get-product`);
 }



}
