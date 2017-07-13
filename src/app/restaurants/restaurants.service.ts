import {Restaurant} from './restaurant/restaurant.model'
import {MEAT_API} from 'app/app.api'
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {MenuItem} from 'app/restaurant-detail/menu-item/menu-item.model'
import {ErrorHandler} from 'app/app.error_handler'

@Injectable()
export class RestaurantsService{

constructor(private http : Http){}


restaurants(search?:string): Observable<Restaurant[]>{

    return this.http.get(`${MEAT_API}/restaurants`,{params:{q:search}})
    .map(response => response.json())
    .catch(ErrorHandler.handlerError)
}

restaurantById(id : string): Observable<Restaurant>{
  return this.http.get(`${MEAT_API}/restaurants/${id}`)
  .map(response => response.json())
  .catch(ErrorHandler.handlerError)
}

reviewsOfRestaurant(id : string):Observable<any> {
  return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  .map(response => response.json())
  .catch(ErrorHandler.handlerError)
}

menuOfRestaurants(id:string): Observable<MenuItem[]>{
  return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
  .map(response => response.json())
  .catch(ErrorHandler.handlerError)
}

}
