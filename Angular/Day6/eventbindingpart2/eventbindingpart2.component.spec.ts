import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventbindingpart2Component } from './eventbindingpart2.component';

describe('Eventbindingpart2Component', () => {
  let component: Eventbindingpart2Component;
  let fixture: ComponentFixture<Eventbindingpart2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventbindingpart2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventbindingpart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
