# angular-resize-event

## Installation

To install this library, run:

```bash
$ npm install angular-resize-event --save
```

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

// Import your library
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
<!-- You can now use your library component in app.component.html -->
<div (resized)="onResized($event)"></div>
```

```typescript
import { ResizedEvent } from 'angular-resize-event';

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
