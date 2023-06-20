import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NewsComponent} from './news/news.component';
import {MySalesComponent} from './my-sales/my-sales.component';
import {SalesComponent} from './sales/sales.component';
import {ConfigurationComponent} from './configuration/configuration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {path: 'login', component: LoginComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'news', component: NewsComponent},
  {path: 'mysales', component: MySalesComponent},
  {path: 'configuration', component: ConfigurationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
