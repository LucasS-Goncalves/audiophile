import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  @Input() showAppCategory!: boolean;

  categoriesList = [
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-headphones.svg',
      title: 'HEADPHONES',
      link: '/headphones'
    },
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-speakers.svg',
      title: 'SPEAKERS',
      link: ''
    },
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-earphones.svg',
      title: 'EARPHONES',
      link: ''
    },
  ];

}
