import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component, ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StartPaginaComponent } from './start-pagina/start-pagina.component';
import { AccountPaginaComponent } from './account-pagina/account-pagina.component';
import { GeschiedenisPaginaComponent } from './geschiedenis-pagina/geschiedenis-pagina.component';
import { WedstrijdPaginaComponent } from './wedstrijd-pagina/wedstrijd-pagina.component';
import { LoginschermComponent } from './loginscherm/loginscherm.component';
import { RegistratieschermComponent } from './registratiescherm/registratiescherm.component';
import { GeschiedenisdetailComponent } from './geschiedenisdetail/geschiedenisdetail.component';




@NgModule({
  declarations: [
    AppComponent,
    StartPaginaComponent,
    AccountPaginaComponent,
    GeschiedenisPaginaComponent,
    WedstrijdPaginaComponent,
    LoginschermComponent,
    RegistratieschermComponent,
    GeschiedenisdetailComponent,
 
  ],
  entryComponents: [
    StartPaginaComponent,
    AccountPaginaComponent,
    GeschiedenisPaginaComponent,
    WedstrijdPaginaComponent,
    LoginschermComponent,
    RegistratieschermComponent,
    GeschiedenisdetailComponent
  ],
  imports: [
     OnsenModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
