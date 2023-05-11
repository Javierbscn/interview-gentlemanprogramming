import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { Observable } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL = 'https://fakestoreapi.com/products';
  private productViewSubject = new BehaviorSubject<Product>({} as Product);
  private productView$ = this.productViewSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getProducts();
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL)
  }

  productToView(product: Product): void {
    this.productViewSubject.next(product)
  }

  get getProductView(): Observable<Product> {
    return this.productView$;
  }

}
