import { Component } from '@angular/core';
import {ResizedEvent} from 'angular-resize-event';

@Component({
  selector: 'app-root',
  template: `
    <div (resized)="onResized($event)">
      {{ width }}x{{ height }}
    </div>
  `,
  styles: [`
    div {
      width: 50%;
      height: 50vh;
      size: 50%;
      font-size: 4em;
      background: red;
      resize: both;
      overflow: hidden;
    }
  `]
})
export class AppComponent {
  width: number;
  height: number;

  onResized(event: ResizedEvent): void {
    this.width = event.newWidth;
    this.height = event.newHeight;
  }
}
