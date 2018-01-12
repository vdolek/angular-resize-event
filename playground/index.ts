/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AngularResizedEventModule }  from 'angular-resize-event';

@Component({
  selector: 'app',
  template: `<div resized></div>`
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, AngularResizedEventModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
