import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/interfaces/product';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [
    './product-detail.component.css',
    './styles/productInfo-section.css',
    './styles/content-section.css',
    './styles/pictures-section.css',
    './styles/youMayLike-section.css'
  ]
})
export class ProductDetailComponent implements OnInit{

  amount = 1;
  product!: Product;
  id!: string;

  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.product = products.find(product => product.id === this.id)!;
    if(!this.product){
      this.router.navigate([''])
    };

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.product = products.find(product => product.id === this.id)!;
        if(!this.product){
          this.router.navigate([''])
        };
      }
    )
  }

  increaseAmount(){
    this.amount++;
  }

  decreaseAmount(){
    this.amount--;
  }

  addToCart(){
    this.cartService.addItemToCart(this.id, this.amount);
    this.amount = 1;
  }
}
