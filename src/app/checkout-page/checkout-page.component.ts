import { MyDataService } from './../my-data.service';
import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent {
  orders: any ;

  constructor(private MyDataService: MyDataService) {}

  ngOnInit() {
    this.orders = this.MyDataService.getData();
  }

  statusCondition = true;

 changeToCancel(){
  this.orders.orderStatus = 'Canceled';
  this.statusCondition = false;
 }
 changeToProcessing(){
  this.orders.orderStatus = 'Confirmed';
  this.statusCondition = false;
 }
 deleteItems(){
  const keys = Object.keys(this.orders);
  for(let key of keys){
    if(key !== 'address'){
      delete this.orders[key];
    }
  }
  
 }


}
