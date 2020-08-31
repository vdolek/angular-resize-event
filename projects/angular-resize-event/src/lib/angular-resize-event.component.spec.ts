import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularResizeEventComponent } from './angular-resize-event.component';

describe('AngularResizeEventComponent', () => {
  let component: AngularResizeEventComponent;
  let fixture: ComponentFixture<AngularResizeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularResizeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularResizeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
