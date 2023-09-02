import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isMenuOpened = false;

  categoriesList = [
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-headphones.png',
      title: 'HEADPHONES'
    },
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-speakers.png',
      title: 'EARPHONES'
    },
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-earphones.png',
      title: 'SPEAKERS'
    },
  ];

  openMenu(){
    this.isMenuOpened  = !this.isMenuOpened;
  }
}
