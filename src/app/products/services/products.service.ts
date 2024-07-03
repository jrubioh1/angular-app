import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private products: Product[]=[
    {id:1,name:"mesa", decription:"Mesa para el comedor", price:700},
    {id:2,name:"teclado", decription:"teclado mecanico", price:70},
    {id:3,name:"ordenador", decription:"ordenador", price:1234},
  ];
  constructor() { }
  findAll():Observable<Product[]>{
    
    return  of(this.products) ;

  }

}
