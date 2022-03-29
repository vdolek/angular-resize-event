import { Directive, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';
import { ResizedEvent } from './resized.event';

@Directive({
  selector: '[resized]'
})
export class ResizedDirective implements OnInit, OnDestroy {
  private observer: ResizeObserver | undefined;
  private oldRect?: DOMRectReadOnly;
  private isBrowser = isPlatformBrowser(this.platformId);

  @Output()
  public readonly resized: EventEmitter<ResizedEvent>;

  public constructor(
    private readonly element: ElementRef,
    private readonly zone: NgZone,
    @Inject(PLATFORM_ID) private platformId: object,
  )
  {
    this.resized = new EventEmitter<ResizedEvent>();
    if (this.isBrowser) {
      this.observer = new ResizeObserver(entries => this.zone.run(() => this.observe(entries)));
    }
  }

  public ngOnInit(): void {
    this.observer?.observe(this.element.nativeElement)
  }

  public ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private observe(entries: ResizeObserverEntry[]): void {
    const domSize = entries[0];
    const resizedEvent = new ResizedEvent(domSize.contentRect, this.oldRect);
    this.oldRect = domSize.contentRect;
    this.resized.emit(resizedEvent);
  }
}

