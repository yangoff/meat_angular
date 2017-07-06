import {CartItem} from 'app/restaurant-detail/shopping-cart/cart-item.model'
import {MenuItem} from 'app/restaurant-detail/menu-item/menu-item.model'
export class ShoppingCartService{
  items:CartItem[] = []

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
}

delItem(item : CartItem){
  this.items.splice(this.items.indexOf(item),1)
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
