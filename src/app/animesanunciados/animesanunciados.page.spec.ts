import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesanunciadosPage } from './animesanunciados.page';

describe('AnimesanunciadosPage', () => {
  let component: AnimesanunciadosPage;
  let fixture: ComponentFixture<AnimesanunciadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesanunciadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesanunciadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
