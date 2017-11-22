import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ViewChild, Params, OnsNavigator, OnsenModule  } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as ons from 'onsenui';


  @Component({
    selector: 'ons-page[tenth]',
    template: `
    <ons-page>
    <ons-toolbar>
      <div class="left"><ons-back-button (click)="Pop()">Back</ons-back-button></div>
        <div class="right">
        <ons-toolbar-button (click)="logoutmessage()">Logout</ons-toolbar-button>
      </div>
    </ons-toolbar>
    <div class="content">
    <ons-list id="pending-list" class="list">
    <ons-list-item category="programming" class="list-item" style=""><div class="center list-item__center">speler 1</div><div class="right list-item__right"><ons-icon style="color: grey; padding-left: 4px" icon="ion-ios-trash-outline, material:md-delete" class="ons-icon ion-ios-trash-outline ons-icon--ion"></ons-icon></div></ons-list-item>
    <ons-list-item category="programming" class="list-item" style=""><div class="center list-item__center">speler 2</div><div class="right list-item__right"><ons-icon style="color: grey; padding-left: 4px" icon="ion-ios-trash-outline, material:md-delete" class="ons-icon ion-ios-trash-outline ons-icon--ion"></ons-icon></div></ons-list-item>
    <ons-list-item category="programming" class="list-item" style=""><div class="center list-item__center">speler 3</div><div class="right list-item__right"><ons-icon style="color: grey; padding-left: 4px" icon="ion-ios-trash-outline, material:md-delete" class="ons-icon ion-ios-trash-outline ons-icon--ion"></ons-icon></div></ons-list-item>
    </ons-list>

    <div style="text-align: center; margin: 10px;">
    <ons-button (click)="addPlayer()">Add player</ons-button>
    </div>
    </div>
  </ons-page>
          `
  })

export class TeamspelersComponent{
constructor(private navigator: OnsNavigator){
  
    } 

   teamDetail(){
      this.navigator.element.pushPage()
    }

    addPlayer(){

    }

}