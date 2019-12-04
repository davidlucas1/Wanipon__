import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestaoanimePage } from './sugestaoanime.page';

describe('SugestaoanimePage', () => {
  let component: SugestaoanimePage;
  let fixture: ComponentFixture<SugestaoanimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestaoanimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugestaoanimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
