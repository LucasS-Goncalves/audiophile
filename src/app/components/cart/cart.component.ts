import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/interfaces/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{

  totalPrice = "0";
  numberOfItems = 0;
  cartItems: CartItem[] = [];
  cartItemsSubscription!: Subscription;
  numberOfItemsSubscription!: Subscription;
  totalPriceSubscription!: Subscription;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.cartService.cartItemsChanged.subscribe(
      (cartItems: CartItem[]) => {
        this.cartItems = cartItems;
      }
    );

    this.numberOfItemsSubscription = this.cartService.numberOfItemsChanged.subscribe(
      (numberOfItems: number) => {
        this.numberOfItems = numberOfItems;
      }
    );

    this.totalPriceSubscription = this.cartService.priceChanged.subscribe(
      (totalPrice: number) => {
        let number = totalPrice.toString().split('.');
        number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        this.totalPrice = number.join('.');
      }
    );
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
