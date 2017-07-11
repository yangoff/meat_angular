import {EventEmitter}from '@angular/core'

export class NotificationService{
  notifier = new EventEmitter<string>()
  notyfy(message:string){
    this.notifier.emit(message)
  }
}
