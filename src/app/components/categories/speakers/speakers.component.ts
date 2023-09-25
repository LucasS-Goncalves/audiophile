import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: [
    './speakers.component.css',
    './styles/header.css',
    './styles/products-section.css'
  ]
})
export class SpeakersComponent {

  speakers = [
    {
      id: "zx9",
      img1: "../../../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
      img2: "../../../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
      img3: "../../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
      isNewProduct: true,
      name: "ZX9 speaker",
      description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf   speaker system that offers truly wireless connectivity -- creating new possibilities for more   pleasing and practical audio setups."
    },
    {
      id: "zx7",
      img1: "../../../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
      img2: "../../../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
      img3: "../../../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
      isNewProduct: false,
      name: "ZX7 SPEAKER",
      description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
    },
  ]
}
