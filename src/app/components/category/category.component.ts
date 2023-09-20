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
    },
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-speakers.svg',
      title: 'SPEAKERS',
    },
    {
      productImg: '../../../assets/shared/desktop/image-category-thumbnail-earphones.svg',
      title: 'EARPHONES',
    },
  ];

}
