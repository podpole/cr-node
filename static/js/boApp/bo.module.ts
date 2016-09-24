import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './bo.routing';

import { ContentModule } from './content/content.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { BoComponent } from './bo.component';
import { NavigationComponent } from './navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    ContentModule,
    DashboardModule
  ],
  declarations: [
    BoComponent,
    NavigationComponent
  ],
  bootstrap: [
    BoComponent
  ]
})

export class BoModule {
  constructor() {

  }
}
