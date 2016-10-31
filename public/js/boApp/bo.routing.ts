import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './content/recipes.component';
import { CategoryComponent } from './content/category.component';
import { ErrorComponent } from './error.component';

const boRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard/stat',
    component: DashboardComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: 'content/recipes',
    component: RecipesComponent
  },
  {
    path: 'content/category',
    component: CategoryComponent
  },
  {
    path: 'content',
    redirectTo: 'content/recipes'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(boRoutes);



