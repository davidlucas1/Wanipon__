import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeinfoPage } from './animeinfo.page';

describe('AnimeinfoPage', () => {
  let component: AnimeinfoPage;
  let fixture: ComponentFixture<AnimeinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
