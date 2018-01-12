import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class AngularResizedEventModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularResizedEventModule
    };
  }
}
