import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootBody3Component } from './root-body3.component';

describe('RootBody3Component', () => {
  let component: RootBody3Component;
  let fixture: ComponentFixture<RootBody3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootBody3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootBody3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
