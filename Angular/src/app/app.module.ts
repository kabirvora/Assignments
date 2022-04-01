import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from "src/environments/environment";
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './/header/header.component';
import { WallpaperComponent } from './home/wallpaper/wallpaper.component';
import { ProductsComponent } from './home/products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from '../app/service/firebase.service'
import { ProductsService } from './service/products.service';
import {MatTableModule} from '@angular/material/table';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { CheckoutComponent } from './checkout/checkout.component';
import { CartService } from './service/cart.service';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    WallpaperComponent,
    ProductsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [FirebaseService, ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
