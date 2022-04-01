import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import {FirebaseService} from '../service/firebase.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private FirebaseService: FirebaseService) { }

  ngOnInit(): void {
  }
  login() {
    if (this.email == '') {
      alert('Please Enter Email')
      return;
    }
    if (this.password == '') {
      alert('Please Enter Password')
      return;
    }
    this.FirebaseService.Login(this.email, this.password)
    this.email = '';
    this.password ='';
  }

}
