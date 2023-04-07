import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Golfer } from '../models/document.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TournamentSocketDataService {
  public TimeSinceLastUpdate: number = Date.now();
  private DataObserver: Observable<Golfer>

  constructor(private socket: Socket) {
    this.DataObserver = this.socket.fromEvent('data-update');

    this.socket.on('data-update', (data: Golfer) => {
      this.TimeSinceLastUpdate = Date.now();
    })

    this.socket.on('connect', () => {
      this.TimeSinceLastUpdate = Date.now();
    })
  }

  subscribe(callback: Function) {
    this.DataObserver.subscribe({
      next(update) { 
        console.debug(update)
        callback(update)
      }
    })
  }
}
