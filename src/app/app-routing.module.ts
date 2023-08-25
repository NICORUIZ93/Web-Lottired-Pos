import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './pages/static/page404/page404.component';
import { authGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((mod) => mod.HomeModule),
    canActivateChild: [authGuard],
  },
  {
    path: 'configuration',
    loadChildren: () =>
      import('./pages/configuration/configuration.module').then(
        (mod) => mod.ConfigurationModule
      ),
  },
  {
    path: 'mysales',
    loadChildren: () =>
      import('./pages/my-sales/my-sales.module').then(
        (mod) => mod.MySalesModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then((mod) => mod.NewsModule),
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('./pages/sales/sales.module').then((mod) => mod.SalesModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'Page404',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
