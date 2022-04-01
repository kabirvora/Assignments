import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FirebaseService} from '../service/firebase.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 email : string =''
 password: string =''
  constructor(private firebaseService:FirebaseService , private router :Router) { }
  ngOnInit(): void {
  }

  signUp() {
    if (this.email == '') {
      alert('Please Enter Email')
      return;
    }
    if (this.password == '') {
      alert('Please Enter Password')
      return;
    }
    this.firebaseService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    }
}
