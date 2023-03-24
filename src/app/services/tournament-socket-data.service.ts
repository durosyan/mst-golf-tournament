import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class TournamentSocketDataService {
  currentDocument = this.socket.fromEvent<Document>('data-update');

  constructor(
    private socket: Socket
  ) {}

  getDocument(id: string) {
  }
}
