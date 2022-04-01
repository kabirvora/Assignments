import { Injectable } from '@angular/core';
import { Products } from './products.model';
// import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Array<object> =[]
  temp :any;
  temp2: Array<object> =[]

  existProducts:any

  addToCart(products : Products){
    this.cartItems.push(products)
    alert('Product Added To Cart')
    localStorage.setItem('CartProducts', JSON.stringify(this.cartItems))
  }

  viewCart(){
    this.temp2 = JSON.parse(localStorage.getItem('CartProducts')!)
    if(this.temp2 !=  null)
    {
      this.cartItems = this.temp2
    }
    return this.cartItems
  }

  removeItem(i: any){
    this.temp = this.cartItems.indexOf(i)
    this.cartItems.splice(this.temp ,1)
    localStorage.setItem('CartProducts', JSON.stringify(this.cartItems))
    alert('Product Removed From')
  }
  clearCart(){
    this.cartItems =[]
    localStorage.removeItem('CartProducts')
  }
}
