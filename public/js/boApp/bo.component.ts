import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SubMenu } from './services/submenu.service';
import { AccessService } from './services/access.service';
import { Subscription }   from 'rxjs/Subscription';
import { NavigationComponent } from './navigation.component';

@Component ({
  selector: 'bo-app',
  templateUrl: '/tpl/admin/main.html',
  providers: [ SubMenu ],
  inputs:['subMenu'],
  viewProviders: [ NavigationComponent ]
})

export class BoComponent implements OnDestroy {
  public menu = [];
  public subMenu = [];
  subscription: Subscription;

  constructor(
      private SubMenu:SubMenu,
      private acessService:AccessService,
      private router: Router
  )
  {
    this.menu = [
      {
        url: '',
        name: 'Панель управления'
      },
      {
        url: 'content',
        name: 'Контент'
      },
      {
        url: 'users',
        name: 'Пользователи'
      }
    ];

    this.subscription = SubMenu.getSubMenu$.subscribe(list => {
      this.subMenu = list;
    });

    this.acessService
        .init()
        .then((access) => {
          if(access.access === 'deny')
          {
            this.menu = [];
            this.subMenu = [];
            this.router.navigate(['error']);
          }
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
