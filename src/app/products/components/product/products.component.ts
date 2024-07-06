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
  productSelected:Product=new Product();

  constructor(private service: ProductsService){}

  ngOnInit():void{
    this.service.findAll().subscribe(products=>this.products=products)
  }


 addProduct(product: Product): void {

    if (product.id > 0) {
      this.service.update(product).subscribe(productUpdated => {
        
        this.products = this.products.map(prod => {
          if (prod.id == product.id) {
            return { ... productUpdated };
          }
          return prod;
        });
      });

    } else {
      this.service.create(product).subscribe(productNew => {
        // this.products.push({ ...productNew });
        this.products = [... this.products, { ...productNew }];
      })
    }
    this.productSelected = new Product();
  }

  onRemoveProduct(id: number): void {
    this.service.remove(id).subscribe(() => {
      this.products = this.products.filter(product => product.id != id);
    })
  }

  onUpdateProduct(productRow: Product): void {
    this.productSelected = {... productRow};
  }




}
