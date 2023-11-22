import { BehaviorSubject } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/interfaces/cartItem';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: [
    './summary.component.css',
    './styles/summaryProducts-section.css',
    './styles/summaryInfo-section.css'
  ]
})
export class SummaryComponent implements OnInit{

  items!: Observable<CartItem[]>;
  totalPriceOfItems!: BehaviorSubject<number>;
  @Input() validForm = false;
  @Output() order = new EventEmitter();

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.items = this.cartService.cartItemsChanged;
    this.totalPriceOfItems = this.cartService.priceChanged;
  }

  onOrder(){
    this.order.emit();
  }
}
