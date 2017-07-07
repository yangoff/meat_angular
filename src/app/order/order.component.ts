import { Component, OnInit } from '@angular/core';
import {RadioOption} from 'app/shared/radio/radio-option.model'
import {OrderService}  from 'app/order/order.service'
import {CartItem} from 'app/restaurant-detail/shopping-cart/cart-item.model'
import {Order,OrderItem} from 'app/order/order.model'
import {Router} from '@angular/router'


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

    delivery : number = 8

  paymentOptions: RadioOption[]=[

    {label:'Dinheiro', value:'MON'},
    {label:'Débito', value:'DEB'},
    {label:'Catão Refeição', value:'REF'}

  ]

  constructor(private orderService :OrderService,private router:Router) { }

  ngOnInit() {
  }

  itemsValue(): number{
    return this.orderService.itemsValue()
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

  checkOrder(order : Order){
    order.orderItems = this.cartItems()
    .map((item:CartItem) => new OrderItem(item.quantity,item.menuItem.id))
    this.orderService.checkOrder(order).subscribe(
      (orderId: string)=>{
        this.router.navigate(['/order-summary'])
        this.orderService.clear()
      }
  )

    console.log(order)
  }

}
