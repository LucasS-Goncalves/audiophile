import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeadphonesComponent } from './components/categories/headphones/headphones.component';
import { HomeComponent } from './components/home/home.component';
import { SpeakersComponent } from './components/categories/speakers/speakers.component';
import { EarphonesComponent } from './components/categories/earphones/earphones.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
