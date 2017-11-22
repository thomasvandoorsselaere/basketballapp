import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ons from 'onsenui';
import { AccountPaginaComponent } from '../account-pagina/account-pagina.component';
import { GeschiedenisPaginaComponent } from '../geschiedenis-pagina/geschiedenis-pagina.component';
import { WedstrijdPaginaComponent } from '../wedstrijd-pagina/wedstrijd-pagina.component';
import { LoginschermComponent } from '../loginscherm/loginscherm.component';
import { TeamsComponent } from '../teams/teams.component';

  @Component({
    selector: 'ons-page[second]',
    template: `
    <ons-page>
    <ons-toolbar>
        <div class="right">
        <ons-toolbar-button (click)="logoutmethode()">Logout</ons-toolbar-button>
      </div>
    </ons-toolbar>
    <div class="content">
        <ons-list>
          <ons-list-item modifier="chevron" tappable (click)="pushWedstrijd()">Nieuwe wedstrijd</ons-list-item>
          <ons-list-item modifier="chevron" tappable (click)="pushteams()">Teams</ons-list-item>
          <ons-list-item modifier="chevron" tappable (click)="pushGeschiedenis()">Geschiedenis</ons-list-item>
          <ons-list-item modifier="chevron" tappable (click)="pushAccount()">Account</ons-list-item>
        </ons-list>
    </div>
  </ons-page>
          `
  })

export class StartPaginaComponent{
  
  constructor(private navigator: OnsNavigator){

  }
  pushGeschiedenis(){
    this.navigator.element.pushPage(GeschiedenisPaginaComponent)
  }

  pushAccount() {
    this.navigator.element.pushPage(AccountPaginaComponent)
  }

  pushteams() {
    this.navigator.element.pushPage(TeamsComponent)
  }

  pushWedstrijd() {
    this.navigator.element.pushPage(WedstrijdPaginaComponent)
  }

  logoutmethode(){
    this.navigator.element.popPage(LoginschermComponent)
  }
}


