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
    <ons-list-item modifier="nodivider"><label class="center" for="inner-highlight-input">Speler 1</label><div class="right"><ons-switch id="highlight-input" input-id="inner-highlight-input"></ons-switch></div></ons-list-item>
    <ons-list-item modifier="nodivider"><label class="center" for="inner-highlight-input">Speler 2</label><div class="right"><ons-switch id="highlight-input" input-id="inner-highlight-input"></ons-switch></div></ons-list-item>
    <ons-list-item modifier="nodivider"><label class="center" for="inner-highlight-input">Speler 3</label><div class="right"><ons-switch id="highlight-input" input-id="inner-highlight-input"></ons-switch></div></ons-list-item>
    <ons-list-item modifier="nodivider"><label class="center" for="inner-highlight-input">Speler 4</label><div class="right"><ons-switch id="highlight-input" input-id="inner-highlight-input"></ons-switch></div></ons-list-item>
    <ons-list-item modifier="nodivider"><label class="center" for="inner-highlight-input">Speler 5</label><div class="right"><ons-switch id="highlight-input" input-id="inner-highlight-input"></ons-switch></div></ons-list-item>
    <ons-list-item modifier="nodivider"><label class="center" for="inner-highlight-input">Speler 6</label><div class="right"><ons-switch id="highlight-input" input-id="inner-highlight-input"></ons-switch></div></ons-list-item>
  </ons-list>
  </div>
</ons-page>
        `
})
export class WedstrijdSpelersComponent {

  constructor(private navigator: OnsNavigator){
    
      }

  Pop(){
    this.navigator.element.popPage(WedstrijdPaginaComponent)
  }

}

