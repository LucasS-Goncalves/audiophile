import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  id: any;
  product!: Product;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.product = products.find(product => product.id === this.id)!;
    if(!this.product){
      this.router.navigate([''])
    }

    console.log(this.product)
  }
}
