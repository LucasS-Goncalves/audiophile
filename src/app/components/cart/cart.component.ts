import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/interfaces/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{

  totalPrice!: Observable<number>;
  numberOfItems!: Observable<number>;
  cartItems!: Observable<CartItem[]>;
  cartItemsSubscription!: Subscription;
  numberOfItemsSubscription!: Subscription;
  totalPriceSubscription!: Subscription;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItemsChanged

    this.numberOfItems = this.cartService.numberOfItemsChanged;

    this.totalPrice = this.cartService.priceChanged;
  }

  increaseAmount(){

  }

  decreaseAmount(){

  }

  removeItems(){
    this.cartService.clearCartItems();
  }

  ngOnDestroy(): void {
    this.numberOfItemsSubscription.unsubscribe();
    this.totalPriceSubscription.unsubscribe();
    this.cartItemsSubscription.unsubscribe();
  }
}
