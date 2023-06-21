import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbOptionModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbStepperModule,
  NbTabsetModule,
  NbThemeModule,
  NbToastrModule,
  NbTreeGridModule,
  NbUserModule,
} from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { HomeComponent } from './pages/home/home.component';
import { MySalesComponent } from './pages/my-sales/my-sales.component';
import { NewsComponent } from './pages/news/news.component';
import { SalesComponent } from './pages/sales/sales.component';
import { Page404Component } from './pages/static/page404/page404.component';
import { FilesUploadComponent } from './shared/files-upload/files-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalesComponent,
    MySalesComponent,
    NewsComponent,
    FilesUploadComponent,
    ConfigurationComponent,
    RegistrationComponent,
    HomeComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbDialogModule.forRoot(),
    NbButtonModule,
    NbIconModule,
    ReactiveFormsModule,
    NbCardModule,
    NbInputModule,
    NbTreeGridModule,
    NbContextMenuModule,
    NbUserModule,
    NbTabsetModule,
    NbStepperModule,
    NbSpinnerModule,
    NbAlertModule,
    NbOptionModule,
    NbActionsModule,
    NbCheckboxModule,
    NbButtonGroupModule,
  ],
  exports: [
    AppComponent,
    LoginComponent,
    SalesComponent,
    MySalesComponent,
    NewsComponent,
    FilesUploadComponent,
    ConfigurationComponent,
    RegistrationComponent,
    HomeComponent,
    Page404Component,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
