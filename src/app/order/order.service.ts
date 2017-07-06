import {Injectable} from '@angular/core'
import {ShoppingCartService} from 'app/restaurant-detail/shopping-cart/shopping-cart.service'
import{CartItem} from 'app/restaurant-detail/shopping-cart/cart-item.model'

@Injectable()
export class OrderService{
constructor(private cartService : ShoppingCartService){}

  cartItems(): CartItem[]{
    return this.cartService.items
  }

  increaseQTD(item:CartItem){
    this.cartService.increaseQTD(item)
  }

  decreaseQTD(item:CartItem){
this.cartService.decreaseQTD(item)
  }

  remove(item:CartItem){
    this.cartService.removeItem(item)
  }
}
