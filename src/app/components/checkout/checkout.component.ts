import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [
    './checkout.component.css',
    './styles/form.css'
  ]
})
export class CheckoutComponent implements OnInit, AfterViewInit{

  checkoutForm!: FormGroup;
  validForm = false;
  eMoney = true;
  cash = false;
  teste = false;
  @ViewChild('modal', {static: false}) modal!: ElementRef<HTMLDialogElement>;

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      'billing': new FormGroup({
        'name': new FormControl(null, [Validators.required, Validators.pattern(/\S/)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phone': new FormControl(null, [Validators.required, Validators.pattern(
          /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
          )])
      }),
      'shipping': new FormGroup({
        'address': new FormControl(null, [Validators.required, Validators.pattern(/\S/)]),
        'zipCode': new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
        'city': new FormControl(null, [Validators.required, Validators.pattern(/\S/)]),
        'country': new FormControl(null, [Validators.required, Validators.pattern(/\S/)])
      }),
      'payment': new FormGroup({
        'method': new FormControl("eMoney", Validators.required),
        'eMoneyNumber': new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)]),
        'eMoneyPin': new FormControl(null, [Validators.required, Validators.pattern(/^\d+$/)])
      })
    });

    this.checkoutForm.statusChanges.subscribe(
      (status) => {
        if(status === "INVALID") {
          this.validForm = false;
        } else if(status === "VALID") {
          this.validForm = true;
        }
      }
    )
  }

  ngAfterViewInit(): void {
    this.addFormValidators(['eMoneyNumber', 'eMoneyPin']);
  }

  setPaymentMethodToEMoney(){
    this.cash = false;
    this.eMoney = true;
    this.addFormValidators(['eMoneyNumber', 'eMoneyPin']);
  }

  setPaymentMethodToCash(){
    this.cash = true;
    this.eMoney = false;

    this.checkoutForm.get('payment')?.get("eMoneyNumber")?.clearValidators();
    this.checkoutForm.get('payment')?.get("eMoneyPin")?.clearValidators();

    this.checkoutForm.get('payment')?.get("eMoneyNumber")?.updateValueAndValidity();
    this.checkoutForm.get('payment')?.get("eMoneyPin")?.updateValueAndValidity();
  }

  order(){
    if(this.checkoutForm.valid){
      this.modal.nativeElement.showModal();
      window.scroll(0, 0);
    }
  }

  private addFormValidators(fieldList: string[] = []) {
    fieldList.forEach(field => {
        this.checkoutForm.get('payment')!.get(field)!.setValidators([Validators.required, Validators.pattern(/^\d+$/)]);
        this.checkoutForm.get('payment')?.get(field)?.updateValueAndValidity();
    });
  }
}
