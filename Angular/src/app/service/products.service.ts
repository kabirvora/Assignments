import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private angularFirestore: AngularFirestore) { }

  readProducts() {
    return this.angularFirestore.collection('products').snapshotChanges();
  }
  readOrders() {
    return this.angularFirestore.collection('orders').snapshotChanges();
  }
}
