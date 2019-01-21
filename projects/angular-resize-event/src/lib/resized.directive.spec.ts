import { ElementRef } from '@angular/core';
import { ResizedDirective } from './resized.directive';

describe('ResizedDirective', () => {
  it('should create an instance', () => {
    const directive = new ResizedDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
