import { products } from 'src/app/products';
import { Injectable } from "@angular/core";
import { CartItem } from "./interfaces/cartItem";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService{

  cartItemsChanged = new BehaviorSubject<CartItem[]>([]);
  numberOfItemsChanged = new BehaviorSubject<number>(0);
  priceChanged = new BehaviorSubject<number>(0);

  cartItems: CartItem[] = [];

  cartItemsFromLocalStorage = localStorage.getItem("cartItems");

  init(){
    if(this.cartItemsFromLocalStorage){
      this.cartItems = JSON.parse(this.cartItemsFromLocalStorage);
      this.updateCartProperties();
    }
  }

  addItemToCart(id: string, amount: number){
    if(this.cartItems.find(product => product.id === id)){
      const existingProduct: CartItem = this.cartItems.find(product => product.id === id)!;
      const index = this.cartItems.findIndex(product => product === existingProduct);
      const cartItem = new CartItem(existingProduct.id, existingProduct.name, existingProduct.price, existingProduct.image, amount);
      this.cartItems[index] = cartItem;
    } else {
      const product = products.find(product => product.id === id);
      const cartItem = new CartItem(product!.id, product!.productName, product!.price, product!.productImages.imgMobile, amount);
      this.cartItems.push(cartItem);
    }

    this.updateCartProperties();
  }

  private changeTotalPrice(){
    let total = 0;
    for(let i = 0; i < this.cartItems.length; i++){
      total += (+this.cartItems[i].price.replace(",", "") * +this.cartItems[i].amount);
    };
    this.priceChanged.next(total);
  }

  changeAmountOfItemInTheCart(index: number, operation: string){
    const item = this.cartItems[index];
    const newItem = new CartItem(item.id, item.name, item.price, item.image, operation === "increase" ? item.amount + 1 : item.amount - 1);
    this.cartItems[index] = newItem;
    this.updateCartProperties();
  }

  clearCartItems(){
    this.cartItems = [];
    this.updateCartProperties();
  }

  deleteItem(index: number){
    this.cartItems.splice(index, 1);
    this.updateCartProperties();
  }

  private updateCartProperties(){
    this.cartItemsChanged.next(this.cartItems.slice());
    this.numberOfItemsChanged.next(this.cartItems.length);
    this.changeTotalPrice();
    
    this.updateLocalStorage();
  }

  private updateLocalStorage(){
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }
}
