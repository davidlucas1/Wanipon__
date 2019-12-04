import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimestemporadaPage } from './animestemporada.page';

describe('AnimestemporadaPage', () => {
  let component: AnimestemporadaPage;
  let fixture: ComponentFixture<AnimestemporadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimestemporadaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimestemporadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
