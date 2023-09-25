import { Component } from '@angular/core';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: [
    './headphones.component.css',
    './styles/header.css',
    './styles/products-section.css'
  ]
})
export class HeadphonesComponent {

  category!: 'headphones';

  headphones = [
    {
      id: "xx99mark2",
      img1: "../../../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
      img2: "../../../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
      img3: "../../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
      isNewProduct: true,
      name: "XX99 Mark II <br> Headphones",
      description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      id: "xx99mark1",
      img1: "../../../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
      img2: "../../../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
      img3: "../../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
      isNewProduct: false,
      name: "XX99 Mark I <br> Headphones",
      description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
    },
    {
      id: "xx59",
      img1: "../../../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
      img2: "../../../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
      img3: "../../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
      isNewProduct: false,
      name: "XX59 <br> Headphones",
      description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
    },
  ]
}
