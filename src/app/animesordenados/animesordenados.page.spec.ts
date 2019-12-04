import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesordenadosPage } from './animesordenados.page';

describe('AnimesordenadosPage', () => {
  let component: AnimesordenadosPage;
  let fixture: ComponentFixture<AnimesordenadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimesordenadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesordenadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
