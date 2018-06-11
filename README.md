# Angular Resize Event

Angular 5 directive for detecting changes of an element size.

It is as simple as:

```xml
<div (resized)="onResized($event)"></div>
```

It internally uses `ResizeSensor` from [CSS Element Queries](https://github.com/marcj/css-element-queries).

[![Build Status](https://travis-ci.org/vdolek/angular-resize-event.svg?branch=master)](https://travis-ci.org/vdolek/angular-resize-event)
[![npm version](https://badge.fury.io/js/angular-resize-event.svg)](https://badge.fury.io/js/angular-resize-event)

## Using the library

Import the library in any Angular application by running:

```bash
$ npm install angular-resize-event
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the library module
import { AngularResizedEventModule } from 'angular-resize-event';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify AngularResizedEventModule library as an import
    AngularResizedEventModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

Once your library is imported, you can use its `resized` directive in your Angular application:

```xml
<div (resized)="onResized($event)"></div>
```

```typescript
import { Component } from '@angular/core';

// Import the resized event model
import { ResizedEvent } from 'angular-resize-event/resized-event';

@Component({...})
class MyComponent {
  width: number;
  height: number;

  onResized(event: ResizedEvent): void {
    this.width = event.newWidth;
    this.height = event.newHeight;
  }
}
```

## License

MIT © [Martin Volek](mailto:martin@vdolek.cz)
