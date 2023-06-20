import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySalesComponent } from './my-sales.component';

const routes: Routes = [{ path: '', component: MySalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySalesRoutingModule {}
