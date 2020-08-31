import { Component, VERSION } from '@angular/core';

import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  width = 0;
  height = 0;

  onResized(event: ResizedEvent): void {
    this.width = event.newWidth;
    this.height = event.newHeight;
  }
}
