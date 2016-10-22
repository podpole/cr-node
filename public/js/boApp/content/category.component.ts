import { Component } from '@angular/core';
import { SubMenu } from '../services/submenu.service';
import { CategoryService, ICategory } from './category.service';

@Component ({
    templateUrl: '/tpl/admin/content/category.html',
})

export class CategoryComponent {

    private categoryList:ICategory[];

    constructor(private SubMenu:SubMenu, private categoryService:CategoryService)
    {
        this.SubMenu.setSubMenu('content', 'category');
        this.categoryService.getCategoryList().then(category => this.categoryList = category);
    }
}