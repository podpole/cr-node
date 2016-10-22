import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { routing } from './bo.routing';
import { AccessService } from './services/access.service';

import { ContentModule } from './content/content.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { BoComponent } from './bo.component';
import { NavigationComponent } from './navigation.component';
import { SubMenu } from './services/submenu.service';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ContentModule,
    DashboardModule,
    RouterModule
  ],
  declarations: [
    BoComponent,
    NavigationComponent,
    ErrorComponent
  ],
  bootstrap: [
    BoComponent
  ],
  providers: [
    SubMenu,
    AccessService
  ]
})

export class BoModule {
  constructor() {

  }
}
