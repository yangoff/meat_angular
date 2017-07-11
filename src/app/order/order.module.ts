import {NgModule} from '@angular/core'
import {SharedModule} from 'app/shared/shared.module'
import{RouterModule,Routes} from '@angular/router'
import{OrderComponent} from 'app/order/order.component'
import{OrderItemsComponent} from 'app/order/order-items/order-items.component'
import {DeliveryCostsComponent}from 'app/order/delivery-costs/delivery-costs.component'

const ROUTES : Routes=[
  {path:'',component:OrderComponent}
]

@NgModule({
declarations:[OrderComponent,OrderItemsComponent,DeliveryCostsComponent],
imports:[SharedModule,RouterModule.forChild(ROUTES)]

})

export class OrderModule{}
