import { ResizedDirective } from './resized.directive';
import {ElementRef} from '@angular/core';

describe('ResizedDirective', () => {
  it('should create an instance', () => {
    const directive = new ResizedDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
