import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './content/recipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const boRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'content',
    component: RecipesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(boRoutes);
