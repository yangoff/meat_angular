import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,AbstractControl} from '@angular/forms'

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
    emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    numberPattern = /^[0-9]*$/

    orderForm : FormGroup

    delivery : number = 8

  paymentOptions: RadioOption[]=[

    {label:'Dinheiro', value:'MON'},
    {label:'Débito', value:'DEB'},
    {label:'Catão Refeição', value:'REF'}

  ]

  constructor(private orderService :OrderService,private router:Router,private  formBuilder  : FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('',[Validators.required,Validators.minLength(6)]),
      email: this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
      adderess: this.formBuilder.control('',[Validators.required,Validators.minLength(6)]),
      number: this.formBuilder.control('',[Validators.required,Validators.pattern(this.numberPattern)]),
      optionalAdderess: this.formBuilder.control(''),
      paymentOptions: this.formBuilder.control('',[Validators.required])
    },
    {validator: OrderComponent.equalsTo})

  }

  static equalsTo(group: AbstractControl): {[key:string]:boolean}{
const email= group.get('email')
const emailConfirmation = group.get('emailConfirmation')
if(!email || !emailConfirmation){
  return undefined
}
if(email.value !== emailConfirmation.value){
  return {emailsNotMatch:true}
}
  return undefined
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
