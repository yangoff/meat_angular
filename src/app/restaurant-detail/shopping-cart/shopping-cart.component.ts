import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from  'app/restaurant-detail/shopping-cart/shopping-cart.service'
import {trigger,state,style,transition,animate,keyframes} from '@angular/animations'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations:[
    trigger('row',[
      state('ready',style({opacity:1})),
      transition('void => ready',animate('300ms 0ms ease-in',keyframes([
        style({opacity:0,transform:'translateX(-30px)',offset:0}),
        style({opacity:0.7,transform:'translateX(10px)',offset:0.5}),
        style({opacity:1,transform:'translateX(0px)',offset:1})
      ])))
    ])
  ]

})
export class ShoppingCartComponent implements OnInit {
  rowState ='ready'
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
