import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from  'app/restaurant-detail/shopping-cart/shopping-cart.service'


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
  }

  total(){
    this.shoppingCartService.total();
  }

  items(): any[]{
    return this.shoppingCartService.items;
  }
  clear(){
    this.shoppingCartService.clear()
  }
  remove(item :any){
    this.shoppingCartService.delItem(item);
  }
  add(item:any){
    this.shoppingCartService.addItem(item);
  }
}
