import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoGeradorComponent } from './popo-gerador.component';

describe('PopoGeradorComponent', () => {
  let component: PopoGeradorComponent;
  let fixture: ComponentFixture<PopoGeradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoGeradorComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoGeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
