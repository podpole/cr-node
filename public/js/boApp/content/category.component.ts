import { Component } from '@angular/core';
import { SubMenu } from '../services/submenu.service';
import { CategoryService, ICategory } from './category.service';

@Component ({
    templateUrl: '/tpl/admin/content/category.html'
})

export class CategoryComponent {

    public categoryList:ICategory[] = [];
    public category: ICategory;
    public active = true;
    public submitted = false;

    constructor(private SubMenu:SubMenu, private categoryService:CategoryService)
    {
        this.SubMenu.setSubMenu('content', 'category');
        this.categoryService.getCategoryList().then((category) =>
            {
                this.categoryList = category as ICategory[]
            });

        this.category = {
            title: '',
            header: '',
            url: '',
            description: '',
            meta_title: '',
            meta_description: '',
            meta_keywords: ''
        };
    }

    onSubnit():void
    {
        this.submitted = true;
    }

    newCategory():void
    {
        console.log('im here');
        this.active = false;
        this.categoryService.saveNewCategory(this.category).then((status) => {
            console.log(status);
        });
    }


}