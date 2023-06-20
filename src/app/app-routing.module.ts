import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './pages/news/news.component';
import { SalesComponent } from './pages/sales/sales.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { MySalesComponent } from './pages/my-sales/my-sales.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';

const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },

  { path: 'login', component: LoginComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'mysales', component: MySalesComponent },
  { path: 'configuration', component: ConfigurationComponent },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
