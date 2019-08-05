import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmLocationListComponent } from './film-location-list.component';

describe('FilmLocationListComponent', () => {
  let component: FilmLocationListComponent;
  let fixture: ComponentFixture<FilmLocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
