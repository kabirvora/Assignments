import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout: any

  OrderDetail: object= {}
  name: string = ''
  email: string = ''
  address: string = ''
  mnumber: string = ''



  constructor(private cartService: CartService, private fireStore: AngularFirestore) { }


  ngOnInit(): void {
    this.checkout = this.cartService.viewCart()
    console.log(this.checkout)
  }

  
  createCollection(){
    this.OrderDetail = { 
      'name' : this.name,
      'userID' : localStorage.getItem('uid'),
      'address' : this.address,
      'mobileNumber' : this.mnumber,
      'yourProducts': this.checkout
      } 
    this.fireStore.collection('orders').add(this.OrderDetail)
    console.log(this.OrderDetail)
    alert('Order Placed Successfully') 
    this.cartService.clearCart()
    
  }
}
