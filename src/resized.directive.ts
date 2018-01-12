import { Directive, ElementRef, EventEmitter, Output, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[resized]'
})
export class ResizedDirective implements OnInit {

  constructor(private readonly element: ElementRef) {
  }

  ngOnInit(): void {
    this.element.nativeElement.innerHTML = 'Resized Directive';
  }
}
