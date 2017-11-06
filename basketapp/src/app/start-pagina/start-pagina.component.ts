import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ons from 'onsenui';

  @Component({
    selector: 'ons-page[first]',
    template: `
    <ons-page>
    <ons-toolbar>
      <div class="center">{{title}}</div>
        <div class="right">
        <ons-toolbar-button (click)="logoutmessage()">Logout</ons-toolbar-button>
      </div>
    </ons-toolbar>
    <div class="content">
        <ons-list>
          <ons-list-item modifier="chevron" tappable>Nieuwe wedstrijd</ons-list-item>
          <ons-list-item modifier="chevron" tappable>Geschiedenis</ons-list-item>
          <ons-list-item modifier="chevron" tappable>Account</ons-list-item>
        </ons-list>
    </div>
  </ons-page>
          `
  })

export class StartPaginaComponent{
title = 'Basketapp'
  
}


