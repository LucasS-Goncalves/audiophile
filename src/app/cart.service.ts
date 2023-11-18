import { products } from 'src/app/products';
import { Injectable } from "@angular/core";
import { CartItem } from "./interfaces/cartItem";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService{

  cartItemsChanged= new BehaviorSubject<CartItem[]>([]);
  numberOfItemsChanged = new BehaviorSubject<number>(0);
  priceChanged = new BehaviorSubject<number>(0);
  cartItems: CartItem[] = [];

  addItemToCart(id: string, amount: number){
    if(this.cartItems.find(product => product.id === id)){
      const existingProduct: CartItem = this.cartItems.find(product => product.id === id)!;
      const index = this.cartItems.findIndex(product => product === existingProduct);
      const cartItem = new CartItem(existingProduct.id, existingProduct.name, existingProduct.price, existingProduct.image, amount);
      this.cartItems[index] = cartItem;
      this.cartItemsChanged.next(this.cartItems.slice());
    } else {
      const product = products.find(product => product.id === id);
      const cartItem = new CartItem(product!.id, product!.productName, product!.price, product!.productImages.imgMobile, amount);
      this.cartItems.push(cartItem);
      this.cartItemsChanged.next(this.cartItems.slice());
    }
    this.numberOfItemsChanged.next(this.cartItems.length);

    let total = 0;
    for(let i = 0; i < this.cartItems.length; i++){
      total += (+this.cartItems[i].price.replace(",", "") * +this.cartItems[i].amount);
    }
    this.priceChanged.next(total);
  }

  changeAmountOfItem(){

  }

  clearCartItems(){
    this.cartItems = [];
    this.cartItemsChanged.next(this.cartItems.slice());
    this.priceChanged.next(0);
    this.numberOfItemsChanged.next(0);
  }

}
