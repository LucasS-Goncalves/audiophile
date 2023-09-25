import { Component } from '@angular/core';

@Component({
  selector: 'app-earphones',
  templateUrl: './earphones.component.html',
  styleUrls: [
    './earphones.component.css',
    './styles/header.css',
    './styles/products-section.css'
  ]
})
export class EarphonesComponent {

  earphones = [
    {
      id: "yx1",
      img1: "../../../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
      img2: "../../../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
      img3: "../../../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
      isNewProduct: true,
      name: "YX1 WIRELESS EARPHONES",
      description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
    }
  ]
}
