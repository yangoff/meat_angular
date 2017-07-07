import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {
  @Input() delivery
  @Input() itemsValue
  constructor() { }

  ngOnInit() {
  }

  totalValue():number{
return this.itemsValue + this.delivery
  }
}
