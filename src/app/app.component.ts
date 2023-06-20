import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  NbMenuItem,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';

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
    {
      title: 'Mis configuraciones',
      icon: 'settings-outline',
      children: [
        {
          title: 'Configuracion',
          link: '/configuration',
        },
      ],
    },
    {
      title: 'Subir documentos',
      icon: 'settings-outline',
      children: [
        {
          title: 'update',
          link: '/configuration',
        },
      ],
    },
  ];

  selectedItemFormControl = new FormControl();

  constructor(
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService
  ) {}

  ngOnInit() {}

  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
}
