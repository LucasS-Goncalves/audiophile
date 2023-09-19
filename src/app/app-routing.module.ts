import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeadphonesComponent } from './components/categories/headphones/headphones.component';

const routes: Routes = [
  {
    path: 'headphones', component: HeadphonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
