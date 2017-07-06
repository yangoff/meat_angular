import { Component, OnInit ,Input,Output ,EventEmitter} from '@angular/core';
import {CartItem} from 'app/restaurant-detail/shopping-cart/cart-item.model'
@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {
  @Input() items: CartItem[]
  @Output() increaseQTD =  new EventEmitter<CartItem>()
  @Output() decreaseQTD =  new EventEmitter<CartItem>()
  @Output() remove =  new EventEmitter<CartItem>()


  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQTD(item: CartItem){
    this.increaseQTD.emit(item)
  }
  emitDecreaseQTD(item: CartItem){
    this.decreaseQTD.emit(item)
  }
  emitremove(item: CartItem){
    this.remove.emit(item)
  }

}
