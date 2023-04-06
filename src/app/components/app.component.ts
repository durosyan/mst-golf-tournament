import { Component, OnInit } from '@angular/core';
import { Golfer } from '../models/document.model';
import { TournamentSocketDataService } from '../services/tournament-socket-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TournamentSocketDataService]
})
export class AppComponent implements OnInit {
  title = 'mst-golfing';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  data: Golfer[] = [];

  constructor(private Golfer: TournamentSocketDataService) {}

  ngOnInit(): void {
    this.Golfer.subscribe()
  }
}
