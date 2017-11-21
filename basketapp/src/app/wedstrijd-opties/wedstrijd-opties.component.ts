import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ons from 'onsenui';
import { WedstrijdPaginaComponent } from '../wedstrijd-pagina/wedstrijd-pagina.component';

@Component({
  selector: 'ons-page[ninth]',
  template: `
  <ons-page>
  <ons-toolbar>
    <div class="left"><ons-back-button (click)="Pop()">Back</ons-back-button></div>
      <div class="right">
      <ons-toolbar-button (click)="logoutmessage()">Logout</ons-toolbar-button>
    </div>
  </ons-toolbar>
  <div class="content">
   Wedstrijd opties
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
