import { TestBed } from '@angular/core/testing';

import { GamesessionService } from './gamesession.service';

describe('GamesessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesessionService = TestBed.get(GamesessionService);
    expect(service).toBeTruthy();
  });
});
