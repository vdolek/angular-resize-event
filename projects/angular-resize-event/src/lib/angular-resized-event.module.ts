import { NgModule } from '@angular/core';
import { ResizedDirective } from './resized.directive';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ResizedDirective],
  imports: [],
  exports: [ResizedDirective],
  providers: [ResizedDirective]
})
export class AngularResizedEventModule { }
