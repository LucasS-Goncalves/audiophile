import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeadphonesComponent } from './components/categories/headphones/headphones.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'headphones', component: HeadphonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
