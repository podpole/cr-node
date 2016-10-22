import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './../bo.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    DashboardComponent
  ]
})

export class DashboardModule {
  constructor() {

  }
}
