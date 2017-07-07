import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component'
import {MenuComponent} from 'app/restaurant-detail/menu/menu.component'
import{ReviewsComponent}from 'app/restaurant-detail/reviews/reviews.component'
import {OrderComponent} from 'app/order/order.component'
import {OrderSummaryComponent} from 'app/order-summary/order-summary.component'

export const ROUTES: Routes = [

    {path: '',component:HomeComponent},
    {path: 'about',component:AboutComponent},
    {path: 'restaurants',component:RestaurantsComponent},
    {path: 'restaurants/:id',component:RestaurantDetailComponent,
      children:[
        {path : '',redirectTo:'menu',pathMatch:'full'},
        {path:'menu',component:MenuComponent},
        {path:'reviews',component:ReviewsComponent}

      ]
    },
    {path:'order',component: OrderComponent},
    {path:'order-summary',component:OrderSummaryComponent}
]
