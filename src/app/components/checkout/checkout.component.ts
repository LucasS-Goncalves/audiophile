import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [
    './checkout.component.css',
    './styles/form.css'
  ]
})
export class CheckoutComponent {

  eMoney = false;
  cash = false;

  setPaymentMethodToEMoney(){
    this.cash = false;
    this.eMoney = true;
  }

  setPaymentMethodToCash(){
    this.cash = true;
    this.eMoney = false;
  }
}
