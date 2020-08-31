import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularResizedEventModule } from 'angular-resize-event';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularResizedEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
