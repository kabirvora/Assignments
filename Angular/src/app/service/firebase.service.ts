import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import { CartService } from './cart.service';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  emptyCart :any

constructor(private angularFireAuth: AngularFireAuth, private cartService: CartService, private router : Router) {

}

SignUp(email: string, password: string) {
this.angularFireAuth.createUserWithEmailAndPassword(email, password).then(res => {
console.log('You are Successfully signed up!', res);
this.router.navigate(['/login'])
}).catch(error => {
console.log('Something is wrong:', error.message);
});
}

Login(email: string, password: string) {
this.angularFireAuth.signInWithEmailAndPassword(email, password).then(res => {
    localStorage.setItem('userControl','true');
    localStorage.setItem('uid',JSON.stringify(res.user?.uid))
    this.router.navigate(['/']);
  }).catch(err => {
console.log('Something went wrong:',err.message);
});
}

Logout() {
this.angularFireAuth.signOut().then(()=>{
  localStorage.removeItem('userControl');
  this.cartService.clearCart()
  this.router.navigate(['/login'])
}).catch(err =>{
  console.log('logout failed',err.message)
})
}

}
