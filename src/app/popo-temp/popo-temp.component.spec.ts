import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoTempComponent } from './popo-temp.component';

describe('PopoTempComponent', () => {
  let component: PopoTempComponent;
  let fixture: ComponentFixture<PopoTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoTempComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
