import { Component } from '@angular/core';
import { SubMenu } from '../services/submenu.service';

@Component ({
  templateUrl: '/tpl/admin/dashboard/dashboard.html'
})

export class DashboardComponent {
  constructor(private SubMenu:SubMenu)
  {
    this.SubMenu.setSubMenu('dashboard', 'stat');
  }
}
