import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { routing } from '../bo.routing';

import { CategoryService } from './category.service'

import { RecipesComponent } from './recipes.component';
import { CategoryComponent } from './category.component';



@NgModule({
  imports: [
      routing,
      HttpModule
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
