import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Footer1Component } from './components/footer1/footer1.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { CategoryComponent } from './components/category/category.component';
import { HeadphonesComponent } from './components/categories/headphones/headphones.component';
import { SpeakersComponent } from './components/categories/speakers/speakers.component';
import { ListOfProductsComponent } from './components/categories/list-of-products/list-of-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Footer1Component,
    Footer2Component,
    CategoryComponent,
    HeadphonesComponent,
    SpeakersComponent,
    ListOfProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
