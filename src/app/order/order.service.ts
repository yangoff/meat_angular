import {Injectable} from '@angular/core'
import {ShoppingCartService} from 'app/restaurant-detail/shopping-cart/shopping-cart.service'
import{CartItem} from 'app/restaurant-detail/shopping-cart/cart-item.model'
import{Order,OrderItem} from 'app/order/order.model'
import{Observable} from 'rxjs/Observable'
import {HttpClient}from '@angular/common/http'
import 'rxjs/add/operator/map'
import {MEAT_API} from 'app/app.api'

@Injectable()
export class OrderService{
  constructor(private cartService: ShoppingCartService, private http: HttpClient){}

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
    this.cartService.delItem(item)
  }

  itemsValue():number{
  return this.cartService.total()
  }

  checkOrder(order : Order) :Observable<string>{
    return this.http.post<Order>(`${MEAT_API}/orders`,order).map(order => order.id)
  }

  clear(){
    this.cartService.clear()
  }

}
