import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesejosPage } from './desejos.page';

describe('DesejosPage', () => {
  let component: DesejosPage;
  let fixture: ComponentFixture<DesejosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesejosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesejosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
