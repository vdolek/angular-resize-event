// /**
//  * This is only for local test
//  */
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { Component } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AngularResizedEventModule, ResizedEvent } from 'angular-resize-event';

// @Component({
//   // tslint:disable-next-line:component-selector
//   selector: 'app',
//   styles: ['div { width: 50%; height: 50vh; size: 50%; font-size: 4em; background: red; resize: both; overflow: hidden; }'],
//   template: `
//   <div (resized)="onResized($event)">
//     {{ width }}x{{ height }}
//   </div>`
// })
// class AppComponent {
//   width: number;
//   height: number;

//   onResized(event: ResizedEvent): void {
//     this.width = event.newWidth;
//     this.height = event.newHeight;
//   }
// }

// @NgModule({
//   bootstrap: [ AppComponent ],
//   declarations: [ AppComponent ],
//   imports: [ BrowserModule, AngularResizedEventModule ]
// })
// class AppModule {
// }

// platformBrowserDynamic().bootstrapModule(AppModule);
