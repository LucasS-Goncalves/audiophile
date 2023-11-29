import { Component, HostListener, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  numberOfItems$!: Observable<number>;
  isCartOpened = false;
  isMenuOpened = false;
  innerWidth: any;
  showAppCategory = false;

  categoriesList = [
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-headphones.svg',
      title: 'HEADPHONES',
      width: 80
    },
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-speakers.svg',
      title: 'SPEAKERS',
      width: 84
    },
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-earphones.svg',
      title: 'EARPHONES',
      width: 103
    },
  ];

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.numberOfItems$ = this.cartService.numberOfItemsChanged;
  }

  @HostListener('window:resize', ['$event'])
  onResize(){
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 1199 && this.isMenuOpened === true){
      this.isMenuOpened = false;
    }
  }

  openMenu(){
    this.isMenuOpened  = !this.isMenuOpened;
    this.showAppCategory = !this.showAppCategory;
  }

  openCart(){
    this.isCartOpened = !this.isCartOpened;
  }
}
