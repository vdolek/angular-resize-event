import { TestBed } from '@angular/core/testing';

import { AngularResizeEventService } from './angular-resize-event.service';

describe('AngularResizeEventService', () => {
  let service: AngularResizeEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularResizeEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
