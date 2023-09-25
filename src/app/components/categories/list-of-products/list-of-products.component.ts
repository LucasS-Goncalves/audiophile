import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent {

  @Input() products = [
    {
      id: "",
      img1: "",
      img2: "",
      img3: "",
      name: "",
      isNewProduct: false,
      description: "",
    }
  ]
}
