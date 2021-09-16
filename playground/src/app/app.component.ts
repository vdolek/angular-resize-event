import { Component } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  width = 0;
  height = 0;

  onResized(event: ResizedEvent) {
    console.warn('event', event);
    this.width = event.newRect.width;
    this.height = event.newRect.height;
  }
}
