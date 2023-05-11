import { Component } from '@angular/core';
import { Product } from './../../models/product';
import { ApiService } from './../../services/api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products$: Observable<Product[]>
  productToView: Product = { id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: []
  }

  constructor(private apiService: ApiService, private router: Router) {
    this.products$ = apiService.getProducts();
  }

  viewProduct(product: Product): void {
    this.productToView = product;
    this.apiService.productToView(this.productToView)
    this.router.navigate(['/product'])
  }
}
