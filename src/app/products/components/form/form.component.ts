import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'product-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

 @Input() product:Product={id:0,name:"", decription: "", price:0};

  @Output() newProductEvent= new EventEmitter();

  public onSubmit(productForm: NgForm):void{
    if (productForm.valid){  
      this.newProductEvent.emit(this.product)
      console.log(this.product)
    }
    productForm.reset();
    productForm.resetForm()
  }

  clean(productForm:NgForm):void{
    //this.product={id:0,name:"", decription: "", price:0};
      productForm.reset();
      productForm.resetForm()


  }

}
