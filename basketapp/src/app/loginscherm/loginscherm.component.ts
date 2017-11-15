import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ons from 'onsenui';
import { StartPaginaComponent } from '../start-pagina/start-pagina.component';
import { RegistratieschermComponent } from '../registratiescherm/registratiescherm.component';

@Component({
  selector: 'ons-page[first]',
  template: `
<ons-page>

  <div class="login-form">

    <div class="center">
      <input type="email" class="text-input--underbar" placeholder="Username" value="">
    </div>
    <div class="center">
      <input type="password" class="text-input--underbar" placeholder="Password" value="">
    </div>
    <br><br>
    <ons-button modifier="large" class="login-button" (click)="loginmethode()">Log In</ons-button>

    <ons-button modifier="quiet" class="forgot-password" (click)="registreermethode()">Register</ons-button>
  </div>

</ons-page>
        `
})

export class LoginschermComponent{

constructor(private navigator: OnsNavigator){

}
loginmethode(){
  this.navigator.element.pushPage(StartPaginaComponent)
}

registreermethode(){
  this.navigator.element.pushPage(RegistratieschermComponent)
}

}