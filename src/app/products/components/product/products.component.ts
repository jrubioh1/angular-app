import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';
import { FormComponent } from '../form/form.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products:Product[]=[];

  constructor(private service: ProductsService){}

  ngOnInit():void{
    this.service.findAll().subscribe(products=>this.products=products)
  }

  public addProduct(product: Product):void{
    //product.id=new Date().getTime()
    //this.products.push(product); o, y es mejor
    this.products=[... this.products, {...product, id: new Date().getTime()}] 
  }


}
