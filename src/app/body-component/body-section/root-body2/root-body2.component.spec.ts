import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootBody2Component } from './root-body2.component';

describe('RootBody2Component', () => {
  let component: RootBody2Component;
  let fixture: ComponentFixture<RootBody2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootBody2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootBody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
