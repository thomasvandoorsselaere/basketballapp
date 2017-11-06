import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ons from 'onsenui';
import { StartPaginaComponent } from '../start-pagina/start-pagina.component';

  @Component({
    selector: 'ons-page[second]',
    template: `
    <ons-page>
    <ons-toolbar>
    <div class="left"><ons-back-button (click)="Pop()">Back</ons-back-button></div>
      <div class="center">{{title}}</div>
        <div class="right">
        <ons-toolbar-button (click)="logoutmessage()">Logout</ons-toolbar-button>
      </div>
    </ons-toolbar>
    <div class="content">
      <div><ons-input placeholder="Type Username" [(value)]="Username"></ons-input></div>

      <div><ons-input placeholder="Type email" [(value)]="Email"></ons-input></div>
      <div><ons-input placeholder="Type password" [(value)]="Password"></ons-input></div>
    </div>
  </ons-page>
          `
  })

export class AccountPaginaComponent{
title = 'Basketapp'
constructor(private navigator: OnsNavigator){
  
    }
Pop(){
  this.navigator.element.popPage(StartPaginaComponent)
}

Username: string= '';
Email: string= '';
Password: string= '';

}
