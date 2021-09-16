import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularResizeEventModule } from 'angular-resize-event';

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
