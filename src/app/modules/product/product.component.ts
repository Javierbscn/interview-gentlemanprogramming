import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  viewProduct$: Observable<Product> = new BehaviorSubject({
    id: 1,
    title: 'Hola',
    price: 100,
    description: 'cómo estas',
    category: 'saludo',
    image: 'unacosadelocos.png',
    rating: [
      {
        rate: 1,
        count: 10
      }
    ]
  });

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.viewProduct$ = this.apiService.getProductView

  }

}
