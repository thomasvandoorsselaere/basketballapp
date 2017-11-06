import {Component, OnInit, ViewChild} from '@angular/core';
import {OnsenModule, NgModule, CUSTOM_ELEMENTS_SCHEMA, OnsNavigator} from 'ngx-onsenui';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import * as ons from 'onsenui';
import { StartPaginaComponent } from './start-pagina/start-pagina.component';



@Component({
  selector: 'app-root',
  template: `
    <ons-navigator [page]="initialPage"></ons-navigator>
  `
})

export class AppComponent {
  initialPage = StartPaginaComponent;

}
