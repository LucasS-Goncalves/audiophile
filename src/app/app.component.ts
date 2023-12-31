import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'audiophile';

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.init();
  }
}
