import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentSocketDataService {
  constructor(
    private socketUrl: String,
    private timeout: Number
  ) {}

  
}
