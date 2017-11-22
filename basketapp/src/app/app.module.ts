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
import { WedstrijdOptiesComponent } from './wedstrijd-opties/wedstrijd-opties.component';
import { WedstrijdSpelersComponent } from './wedstrijd-spelers/wedstrijd-spelers.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamspelersComponent } from './teamspelers/teamspelers.component';




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
    WedstrijdOptiesComponent,
    WedstrijdSpelersComponent,
    TeamsComponent,
    TeamspelersComponent,
 
  ],
  entryComponents: [
    StartPaginaComponent,
    AccountPaginaComponent,
    GeschiedenisPaginaComponent,
    WedstrijdPaginaComponent,
    LoginschermComponent,
    RegistratieschermComponent,
    GeschiedenisdetailComponent,
    WedstrijdOptiesComponent,
    WedstrijdSpelersComponent,
    TeamsComponent,
    TeamspelersComponent
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
