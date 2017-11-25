import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ons from 'onsenui';
import { StartPaginaComponent } from '../start-pagina/start-pagina.component';
import { WedstrijdOptiesComponent } from '../wedstrijd-opties/wedstrijd-opties.component';
import { WedstrijdSpelersComponent } from '../wedstrijd-spelers/wedstrijd-spelers.component';

  @Component({
    selector: 'ons-page[fifth]',
    template: `
    <ons-page>
    <ons-toolbar>
      <div class="left"><ons-back-button (click)="Pop()">Back</ons-back-button></div>
        <div class="right">
        <ons-toolbar-button (click)="logoutmessage()">Logout</ons-toolbar-button>
      </div>
    </ons-toolbar>
    <div class="content">
      <div style="text-align: center; margin: 10px;">
        <ons-list>
          <ons-list-item modifier="chevron" tappable (click)="wedstrijdopties()">Wedstrijd opties</ons-list-item>
          <ons-list-item modifier="chevron" tappable (click)="wedstrijdspelers()">Spelers</ons-list-item>
        </ons-list>
          <ons-button (click)="startwedstrijd()">Start wedstrijd</ons-button>
      </div>
    </div>
  </ons-page>
          `
  })

export class WedstrijdPaginaComponent{
constructor(private navigator: OnsNavigator){
  
    }
    wedstrijdopties(){
  this.navigator.element.pushPage(WedstrijdOptiesComponent)
}

    wedstrijdspelers(){
  this.navigator.element.pushPage(WedstrijdSpelersComponent)
}
}

