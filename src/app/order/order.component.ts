import { Component, OnInit } from '@angular/core';
import {RadioOption} from 'app/shared/radio/radio-option.model'
import {OrderService}  from 'app/order/order.service'
import {CartItem} from 'app/restaurant-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[]=[

    {label:'Dinheiro', value:'MON'},
    {label:'Débito', value:'DEB'},
    {label:'Catão Refeição', value:'REF'}

  ]

  constructor(private orderService :OrderService) { }

  ngOnInit() {
  }
  cartItems():  CartItem[]{
    return this.orderService.cartItems()
  }


  decreaseQTD(item : CartItem){
  return  this.orderService.decreaseQTD(item)
  }

  increaseQTD(item : CartItem){
  return  this.orderService.increaseQTD(item)
  }
  remove(item : CartItem){
    this.orderService.remove(item)
  }


}
