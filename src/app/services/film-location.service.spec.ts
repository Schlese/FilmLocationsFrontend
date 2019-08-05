import { TestBed } from '@angular/core/testing';

import { FilmLocationService } from './film-location.service';

describe('FilmLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmLocationService = TestBed.get(FilmLocationService);
    expect(service).toBeTruthy();
  });
});
