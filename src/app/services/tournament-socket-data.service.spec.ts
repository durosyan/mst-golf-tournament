import { TestBed } from '@angular/core/testing';
import { TournamentSocketDataService } from './tournament-socket-data.service';

describe('TournamentSocketDataService', () => {
  let service: TournamentSocketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentSocketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
