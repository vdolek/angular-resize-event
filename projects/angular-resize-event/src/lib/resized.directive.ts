import { Directive, ElementRef, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { ResizedEvent } from './resized-event';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[resized]'
})
export class ResizedDirective implements OnInit, OnDestroy {
  @Output()
  readonly resized = new EventEmitter<ResizedEvent>();

  private oldWidth: number;
  private oldHeight: number;

  constructor(private readonly element: ElementRef) {
  }

  ngOnInit(): void {
    this.onResized();
    setTimeout(() => this.onResized(), 1000);
  }

  ngOnDestroy(): void {
  }

  private onResized(): void {
    const newWidth = 10;
    const newHeight = 20;

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
