import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/interfaces/cartItem';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.css']
})
export class OrderedComponent implements OnInit, OnDestroy{

  showItems = false;
  itemsSubscription!: Subscription;
  items: CartItem[] = [];
  totalPriceOfItems!: BehaviorSubject<number>;

  constructor(private cartService: CartService){}

  ngOnInit(): void {

    this.itemsSubscription = this.cartService.cartItemsChanged.subscribe(
      (items: CartItem[]) => {
        this.items = items;
      }
    )
    this.totalPriceOfItems = this.cartService.priceChanged;
  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();
  }
}
