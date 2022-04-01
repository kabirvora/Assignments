import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


 userControl = localStorage.getItem('userControl') ? true : false 


  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
    console.log(this.userControl)
    console.log(typeof(this.userControl))
  }

  logout(){

    addEventListener('storage', function(e) {  
      console.log('Woohoo, someone changed my localstorage via another tab/window!');
     });
     this.firebaseService.Logout()
  }
  

}
