import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NbCardModule, NbButtonModule, NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [CommonModule, NewsRoutingModule],
})
export class NewsModule {}
