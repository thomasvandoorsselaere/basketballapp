import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component, ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StartPaginaComponent } from './start-pagina/start-pagina.component';




@NgModule({
  declarations: [
    AppComponent,
    StartPaginaComponent,
 
  ],
  entryComponents: [
    StartPaginaComponent
  ],
  imports: [
     OnsenModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
