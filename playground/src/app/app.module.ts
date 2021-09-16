import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { AngularResizedEventModule } from '../../../projects/angular-resize-event/src/lib/angular-resized-event.module';

@NgModule({
  imports:      [ BrowserModule,  AngularResizedEventModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
