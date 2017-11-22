import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ons from 'onsenui';
import { WedstrijdPaginaComponent } from '../wedstrijd-pagina/wedstrijd-pagina.component';

@Component({
  selector: 'ons-page[eight]',
  template: `
  <ons-page>
  <ons-toolbar>
    <div class="left"><ons-back-button (click)="Pop()">Back</ons-back-button></div>
      <div class="right">
      <ons-toolbar-button (click)="logoutmessage()">Logout</ons-toolbar-button>
    </div>
  </ons-toolbar>
  <div class="content">
  <ons-list>
    <ons-list-item >Punten    
      <ons-switch [(value)]="punten"></ons-switch>
    </ons-list-item>
    <ons-list-item >rebounds    
      <ons-switch [(value)]="rebounds"></ons-switch>
    </ons-list-item>
    <ons-list-item >assists    
      <ons-switch [(value)]="assists"></ons-switch>
    </ons-list-item>
    <ons-list-item >steals    
      <ons-switch [(value)]="steals"></ons-switch>
    </ons-list-item>
    <ons-list-item >blocks    
      <ons-switch [(value)]="blocks"></ons-switch>
    </ons-list-item>
    <ons-list-item >turnovers    
      <ons-switch [(value)]="turnovers"></ons-switch>
    </ons-list-item>
  </ons-list>
  </div>
</ons-page>
        `
})
export class WedstrijdOptiesComponent {

  constructor(private navigator: OnsNavigator){
    
      }

  Pop(){
    this.navigator.element.popPage(WedstrijdPaginaComponent)
  }

}
