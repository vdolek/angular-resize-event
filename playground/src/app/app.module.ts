import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularResizeEventModule } from 'angular-resize-event';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularResizeEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
