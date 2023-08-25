import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoveryPasswordModule } from './recovery-password.module';
import { RecoveryPasswordComponent } from './recovery-password.component';

const routes: Routes = [
  {
    path: '',
    component: RecoveryPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecoveryPasswordRoutingModule {}
