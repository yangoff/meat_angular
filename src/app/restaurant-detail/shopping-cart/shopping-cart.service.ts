import {CartItem} from 'app/restaurant-detail/shopping-cart/cart-item.model'
import {MenuItem} from 'app/restaurant-detail/menu-item/menu-item.model'
import {Injectable} from '@angular/core'
import {NotificationService} from 'app/shared/messages/notifications.service'
@Injectable()
export class ShoppingCartService{

  items:CartItem[] = []

constructor(private notificationService:NotificationService){}

  clear(){
    this.items=[]
  }

  total() : number {
    return this.items.map(item => item.value()).reduce((prev,value) => prev+value,0)
  }

addItem(item : MenuItem){
let foundItem = this.items.find((mItem) => mItem.menuItem.id == item.id)
if (foundItem) {
    this.increaseQTD(foundItem)
} else {
  this.items.push(new CartItem(item))
}
this.notificationService.notyfy(`Você adicionou o item ${item.name}`)
}

delItem(item : CartItem){
  this.items.splice(this.items.indexOf(item),1)
this.notificationService.notyfy(`Você removeu o item ${item.menuItem.name}`)
}
increaseQTD(item : CartItem){
  item.quantity++
}

decreaseQTD(item : CartItem){
  item.quantity--
  if(item.quantity === 0){
    this.delItem(item)
  }

}

}
