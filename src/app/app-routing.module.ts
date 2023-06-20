import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './pages/sales/sales.component';
import { NewsComponent } from './pages/news/news.component';
import { MySalesComponent } from './pages/my-sales/my-sales.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./pages/auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth',
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'configuration',
    component: ConfigurationComponent,
  },
  {
    path: 'mysales',
    component: MySalesComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'sales',
    component: SalesComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
