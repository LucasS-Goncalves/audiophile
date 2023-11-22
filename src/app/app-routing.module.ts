import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeadphonesComponent } from './components/categories/headphones/headphones.component';
import { HomeComponent } from './components/home/home.component';
import { SpeakersComponent } from './components/categories/speakers/speakers.component';
import { EarphonesComponent } from './components/categories/earphones/earphones.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { checkoutGuard } from './guard/checkout.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'headphones', component: HeadphonesComponent
  },
  {
    path: 'speakers', component: SpeakersComponent
  },
  {
    path: 'earphones', component: EarphonesComponent
  },
  {
    path: 'product/:id', component: ProductDetailComponent
  },
  {
    path: 'checkout', component: CheckoutComponent, canActivate: [checkoutGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
