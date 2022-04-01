import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderItems: any[] = new Array()
  constructor(private productService :ProductsService, private firestore : AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('orders', (ref: any) => ref.where("userID", "==", localStorage.getItem('uid'))).get().subscribe((ss: any) => {

      ss.docs.forEach((doc: any) => {
        this.orderItems.push(doc.data()['yourProducts']);
      })      

    })
    console.log(this.orderItems)
    console.log(localStorage.getItem('uid'))
  }
}

