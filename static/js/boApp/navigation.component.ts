import { Component } from '@angular/core';

@Component ({
  selector: 'bo-navigation',
  templateUrl: '/tpl/admin/navigation.html'
})

export class NavigationComponent {

  menu: any;

  constructor()
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
        url: '/users',
        name: 'Пользователи'
      }
    ];
  }
}
