import { Directive, ElementRef, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { ResizeSensor } from 'css-element-queries';
import { ResizedEvent } from './resized-event';

@Directive({
  selector: '[resized]'
})
export class ResizedDirective implements OnInit, OnDestroy {

  @Output()
  readonly resized = new EventEmitter<ResizedEvent>();

  private oldWidth: number;
  private oldHeight: number;

  private resizeSensor: ResizeSensor;

  constructor(private readonly element: ElementRef) {
  }

  ngOnInit() {
    // only initialize resize watching if sensor is available
    if (ResizeSensor) {
      this.resizeSensor = new ResizeSensor(this.element.nativeElement, () => this.onResized());
    }
  }

  ngOnDestroy() {
    if (this.resizeSensor) {
      this.resizeSensor.detach();
    }
  }

  private onResized() {
    const newWidth = this.element.nativeElement.clientWidth;
    const newHeight = this.element.nativeElement.clientHeight;

    if (newWidth === this.oldWidth && newHeight === this.oldHeight) {
      return;
    }

    const event = new ResizedEvent(
      this.element,
      newWidth,
      newHeight,
      this.oldWidth,
      this.oldHeight
    );

    this.oldWidth = this.element.nativeElement.clientWidth;
    this.oldHeight = this.element.nativeElement.clientHeight;

    this.resized.emit(event);
  }

}
