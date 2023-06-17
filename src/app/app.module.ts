import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbOptionModule,
  NbSelectModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbStepperModule,
  NbTabsetModule,
  NbThemeModule,
  NbToastrModule,
  NbTreeGridModule,
  NbUserModule,
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {LoginComponent} from './login/login.component';
import {SalesComponent} from './sales/sales.component';
import {MySalesComponent} from './my-sales/my-sales.component';
import {NewsComponent} from './news/news.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalesComponent,
    MySalesComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbToastrModule.forRoot(),
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbIconModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbMenuModule.forRoot(),
    NbTreeGridModule,
    NbContextMenuModule,
    NbUserModule,
    NbTabsetModule,
    NbStepperModule,
    NbSpinnerModule,
    NbAlertModule,
    NbSelectModule,
    NbOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
