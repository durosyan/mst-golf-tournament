import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { io } from 'socket.io-client';

interface DataUpdate {
  MSTID: number;
  Match: number;
  First: string;
  Last: string;
  TVName: string;
  Sex: string;
  Nationality: string;
  SOD?: any;
  Score: number;
  Today: number;
  Hole1Strokes: number;
  Hole1STP: number;
  Hole2Strokes: number;
  Hole2STP: number;
  Hole3Strokes: number;
  Hole3STP: number;
  Hole4Strokes: number;
  Hole4STP: number;
  Hole5Strokes: number;
  Hole5STP: number;
  Hole6Strokes: number;
  Hole6STP: number;
  Hole7Strokes: number;
  Hole7STP: number;
  Hole8Strokes: number;
  Hole8STP: number;
  Hole9Strokes: number;
  Hole9STP: number;
  OutStrokes: number;
  OutSTP: number;
  Hole10Strokes?: any;
  Hole10STP?: any;
  Hole11Strokes?: any;
  Hole11STP?: any;
  Hole12Strokes?: any;
  Hole12STP?: any;
  Hole13Strokes?: any;
  Hole13STP?: any;
  Hole14Strokes?: any;
  Hole14STP?: any;
  Hole15Strokes?: any;
  Hole15STP?: any;
  Hole16Strokes?: any;
  Hole16STP?: any;
  Hole17Strokes?: any;
  Hole17STP?: any;
  Hole18Strokes?: any;
  Hole18STP?: any;
  InStrokes?: any;
  InSTP?: any;
  TotalStrokes?: any;
}

const socket = io('https://mst-full-stack-dev-test.herokuapp.com');

socket.on('connect', () => {
  console.log('connected');
})

function validatePayload(data: DataUpdate) {
  if (!data) throw new Error("omg no data");
}

socket.on('data-update', (dataUpdateEventPayload: any) => {
  try {
    validatePayload(dataUpdateEventPayload)
  } catch (error) {
    console.error(error);
  }
  const dataUpdate = dataUpdateEventPayload as DataUpdate;

  // Do something with dataUpdate
  console.log('=========')
  console.log(dataUpdate.OutStrokes)
  console.log(dataUpdate.OutSTP)
  console.log('=========')
});

@Injectable({
  providedIn: 'root'
})
export class MSTSocketService {
  constructor() { }
}
