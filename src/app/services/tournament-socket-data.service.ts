import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Golfer } from '../models/document.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TournamentSocketDataService {
  private DataObserver: Observable<Golfer>

  constructor(private socket: Socket) {
    this.DataObserver = this.socket.fromEvent('data-update');
  }

  subscribe(callback: Function) {
    this.DataObserver.subscribe({
      next(update) { 
        // console.log(update)
        callback(update)
      }
    })
  }
}
