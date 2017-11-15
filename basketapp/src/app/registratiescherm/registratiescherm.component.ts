import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ons from 'onsenui';
import { StartPaginaComponent } from '../start-pagina/start-pagina.component';
import { LoginschermComponent } from '../loginscherm/loginscherm.component';

@Component({
  selector: 'ons-page[seventh]',
  template: `
  <ons-page>
  <ons-toolbar>
  <div class="left"><ons-back-button (click)="Pop()">Back</ons-back-button></div>
  </ons-toolbar>
  <div class="content">
    <div class="center">
      <input type="username" class="text-input--underbar" placeholder="Username" value="">
    </div>
    <div class="center">
    <input type="email" class="text-input--underbar" placeholder="Email" value="">
  </div>
    <div class="center">
      <input type="password" class="text-input--underbar" placeholder="Password" value="">
    </div>
    <br><br>
    <ons-button modifier="large" class="login-button" (click)="Registreer()">Register account</ons-button>
  </div>
</ons-page>
        `
})

export class RegistratieschermComponent{
constructor(private navigator: OnsNavigator){

}

Pop(){
  this.navigator.element.popPage(StartPaginaComponent)
}

Registreer(){
  this.navigator.element.popPage(LoginschermComponent)
}

}