import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ons from 'onsenui';
import { StartPaginaComponent } from '../start-pagina/start-pagina.component';
import { GeschiedenisPaginaComponent } from '../geschiedenis-pagina/geschiedenis-pagina.component';

  @Component({
    selector: 'ons-page[seventh]',
    template: `
    <ons-page>
    <ons-toolbar>
      <div class="left"><ons-back-button (click)="Pop()">Back</ons-back-button></div>
    </ons-toolbar>
    <div class="content">
     Geschiedenisdetail pagina
    </div>
  </ons-page>
          `
  })

export class GeschiedenisdetailComponent{
constructor(private navigator: OnsNavigator){
  
    }
Pop(){
  this.navigator.element.popPage(GeschiedenisPaginaComponent)
}
}
