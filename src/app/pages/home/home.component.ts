import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbMenuItem, NbSidebarService, NbThemeService } from '@nebular/theme';
import { HomeService } from '../../services/home.service';
import { IconsMenu } from 'src/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  changeStateTheme: Boolean;
  profiles = [{ title: 'Profile' }, { title: 'Logout' }];
  username: string;
  user: { role: string; firstName: string };
  role: string;
  items: Observable<NbMenuItem[]>;

  ngOnInit() {
    this.getIconMenu();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.role = this.user?.role;
    this.username = this.user?.firstName;
  }

  constructor(
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private homeService: HomeService
  ) {}

  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  getIconMenu() {
    this.items = this.homeService.getIconMenu();
  }
}
