import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [
    './checkout.component.css',
    './styles/form.css'
  ]
})
export class CheckoutComponent {

  eMoney = true;
  cash = false;
  teste = false;
  @ViewChild('modal', {static: false}) modal!: ElementRef<HTMLDialogElement>;

  setPaymentMethodToEMoney(){
    this.cash = false;
    this.eMoney = true;
  }

  setPaymentMethodToCash(){
    this.cash = true;
    this.eMoney = false;
  }

  order(){
    this.modal.nativeElement.showModal();
  }
}
