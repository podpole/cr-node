import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';

import { routing } from './../bo.routing';
import { RecipesComponent } from './recipes.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    routing
  ],
  declarations: [
    RecipesComponent
  ]
})

export class ContentModule {
  constructor() {
    console.log(2);
  }
}
