import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [
    './checkout.component.css',
    './styles/form.css',
    './styles/ordered.css'
  ]
})
export class CheckoutComponent {

  eMoney = true;
  cash = false;
  teste = false;

  setPaymentMethodToEMoney(){
    this.cash = false;
    this.eMoney = true;
  }

  setPaymentMethodToCash(){
    this.cash = true;
    this.eMoney = false;
  }
}
