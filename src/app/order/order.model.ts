export {Order,OrderItem}
class Order{
constructor(
  
  public adderess : string,
  public number : number,
  public optionalAdderess : string,
  public paymentOption : string,
  public orderItems : OrderItem[]= [],
  public id?: string

){}
}

class OrderItem{
  constructor(public itemQTY: number,public itemID:number){}
}
