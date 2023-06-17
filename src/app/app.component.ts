import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbThemeService, NbSidebarService, NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Web-Lottired-Pos';
  changeStateTheme: Boolean;
  profiles = [{ title: 'Profile' }, { title: 'Logout' }];

  themes = ['dark', 'corporate', 'cosmic', 'default', 'prueba'];

  selectedItemFormControl = new FormControl();

  constructor(
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService
  ) {
    themeService.changeTheme('dark');
  }

  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  items: NbMenuItem[] = [
    {
      title: 'Login',
      icon: 'person-outline',
      expanded: false,
      children: [
        {
          title: 'Login',
          link: '/login',
        },
        {
          title: 'Logout',
        },
      ],
    },
    {
      title: 'ventas',
      icon: 'shopping-cart-outline',
      children: [
        {
          title: 'venta',
          link: '/sales',
        },
      ],
    },
    {
      title: 'Historial',
      icon: 'shopping-bag-outline',
      children: [
        {
          title: 'Mi historial de ventas',
          link: '/mysales',
        },
      ],
    },
    {
      title: 'Noticias',
      icon: 'shake-outline',
      children: [
        {
          title: 'Noticias nuevas',
          link: '/news',
        },
      ],
    },
  ];
}
