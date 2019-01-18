import { NgModule } from '@angular/core';
import { ResizedDirective } from './resized.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ResizedDirective],
  imports: [CommonModule],
  exports: [ResizedDirective]
})
export class AngularResizedEventModule { }
