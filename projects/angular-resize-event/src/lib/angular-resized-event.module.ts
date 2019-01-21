import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizedDirective } from './resized.directive';

@NgModule({
  declarations: [ResizedDirective],
  imports: [CommonModule],
  exports: [ResizedDirective]
})
export class AngularResizedEventModule { }
