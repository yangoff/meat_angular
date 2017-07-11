import {NgModule,ModuleWithProviders} from '@angular/core'
import { InputComponent } from 'app/shared/input/input.component';
import { RadioComponent } from 'app/shared/radio/radio.component';
import { RatingComponent } from 'app/shared/rating/rating.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {OrderService} from 'app/order/order.service'
import {ShoppingCartService} from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import {RestaurantsService} from 'app/restaurants/restaurants.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService} from 'app/shared/messages/notifications.service'

@NgModule({

  declarations:[InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  exports:[InputComponent,RadioComponent,RatingComponent,FormsModule,ReactiveFormsModule,CommonModule,SnackbarComponent]

})

export class SharedModule{
  static forRoot():ModuleWithProviders{
    return{
      ngModule:SharedModule,
      providers: [RestaurantsService,ShoppingCartService,OrderService,NotificationService]
    }
  }
}
