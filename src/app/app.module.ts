import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
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
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {LoginComponent} from './login/login.component';
import {MySalesComponent} from './my-sales/my-sales.component';
import {NewsComponent} from './news/news.component';
import {SalesComponent} from './sales/sales.component';
import {FilesUploadComponent} from './shared/files-upload/files-upload.component';
import {SpinnerComponent} from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalesComponent,
    MySalesComponent,
    NewsComponent,
    SpinnerComponent,
    FilesUploadComponent,
    ConfigurationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({name: 'default'}),
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
    NbThemeModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
