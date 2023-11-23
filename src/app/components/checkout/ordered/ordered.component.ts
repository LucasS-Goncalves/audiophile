import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
  totalPriceOfItems!: Observable<number>;

  constructor(private cartService: CartService, private router: Router){}

  ngOnInit(): void {

    this.itemsSubscription = this.cartService.cartItemsChanged.subscribe(
      (items: CartItem[]) => {
        this.items = items;
      }
    );
    this.totalPriceOfItems = this.cartService.priceChanged.asObservable();
  }

  onBackToHome(){
    this.cartService.clearCartItems();
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.itemsSubscription.unsubscribe();
  }
}
