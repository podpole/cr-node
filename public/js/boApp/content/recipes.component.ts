import { Component } from '@angular/core';
import { SubMenu } from '../services/submenu.service';

@Component ({
  templateUrl: '/tpl/admin/content/recipes.html',
})

export class RecipesComponent {
  constructor(private SubMenu:SubMenu)
  {
    this.SubMenu.setSubMenu('content', 'recipes');
  }
}
