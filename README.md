# Angular Resize Event

[![github version](https://img.shields.io/github/package-json/v/vdolek/angular-resize-event/master?label=github)](https://github.com/vdolek/angular-resize-event)
[![npm version](https://img.shields.io/npm/v/angular-resize-event)](https://www.npmjs.com/package/angular-resize-event)
[![build status](https://img.shields.io/github/workflow/status/vdolek/angular-resize-event/CI/master)](https://github.com/vdolek/angular-resize-event/actions?query=workflow%3ACI)
[![downloads](https://img.shields.io/npm/dt/angular-resize-event)](https://www.npmjs.com/package/angular-resize-event)
[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/vdolek/angular-resize-event)](https://snyk.io/test/github/vdolek/angular-resize-event)

Angular directive for detecting changes of an element size.

It is as simple as:

```html
<div (resized)="onResized($event)"></div>
```

It internally uses `ResizeSensor` from [CSS Element Queries](https://github.com/marcj/css-element-queries).

## Playground

[StackBlitz playground](https://stackblitz.com/edit/angular-resize-event-playground?file=src/app/app.component.html)

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

```html
<div (resized)="onResized($event)"></div>
```

```typescript
import { Component } from '@angular/core';

// Import the resized event model
import { ResizedEvent } from 'angular-resize-event';

@Component({...})
class MyComponent {
  width: number;
  height: number;

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
  }
}
```

## License

MIT © [Martin Volek](mailto:martin@vdolek.cz)
