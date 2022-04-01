import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/service/products.model';
import { ProductsService } from '../../service/products.service'
import { CartService } from 'src/app/service/cart.service';
// import { parse } from 'path';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];
  filter:any;

  

  constructor(private productsService: ProductsService, private cartService: CartService) { }
  ngOnInit() {
    this.productsService.readProducts().subscribe(pArr => {
      this.products = pArr.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Products
        }
      })

    }) 
  };

  addToCart(products: Products) {
    this.cartService.addToCart(products)
  }
  selectCategory(e:any){
    this.filter = e.target.value
  }


}
