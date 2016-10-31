import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from '../bo.routing';

import { CategoryService } from './category.service'

import { RecipesComponent } from './recipes.component';
import { CategoryComponent } from './category.component';



@NgModule({
  imports: [
      routing,
      HttpModule,
      BrowserModule,
      FormsModule
  ],
  declarations: [
      RecipesComponent,
      CategoryComponent
  ],
  providers: [
      CategoryService
  ]
})

export class ContentModule {

}
