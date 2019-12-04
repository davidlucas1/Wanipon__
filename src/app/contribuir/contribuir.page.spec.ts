import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuirPage } from './contribuir.page';

describe('ContribuirPage', () => {
  let component: ContribuirPage;
  let fixture: ComponentFixture<ContribuirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
