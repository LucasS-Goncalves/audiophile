import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { CartItem } from 'src/app/interfaces/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  totalPrice!: Observable<number>;
  numberOfItems!: Observable<number>;
  cartItems!: Observable<CartItem[]>;

  @Output() checkout = new EventEmitter();

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItemsChanged.asObservable();
    this.numberOfItems = this.cartService.numberOfItemsChanged.asObservable();
    this.totalPrice = this.cartService.priceChanged.asObservable();
  }

  changeAmountInTheCart(index: number, operation: string){
    this.cartService.changeAmountOfItemInTheCart(index, operation);
  }

  removeItems(){
    this.cartService.clearCartItems();
  }

  onDeleteItem(index: number){
    this.cartService.deleteItem(index);
  }

  onCheckout(){
    this.checkout.emit();
  }
}
