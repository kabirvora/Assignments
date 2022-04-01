import { Component, OnInit } from '@angular/core';

import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'price'];
  cartproducts: Array<any> = [];
  total:any 

  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cartproducts = this.cartService.viewCart()
    if(this.cartproducts)
      this.getCartTotal()
  }

  removeItem(products:any){
    this.cartService.removeItem(products)
    this.getCartTotal()
    console.log(typeof(this.cartproducts))
  }

  getCartTotal() {
    let grandTotal = 0
    this.cartproducts.map((i)=>{
      grandTotal += i.Price
    })
    this.total = grandTotal
  }
}
