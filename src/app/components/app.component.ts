import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { Golfer } from '../models/document.model';
import { TournamentSocketDataService } from '../services/tournament-socket-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TournamentSocketDataService]
})
export class AppComponent implements AfterViewInit {
  title = 'mst-golfing';
  displayedColumns: string[] = ['position', 'name', 'match', 'nationality'];
  dataSource: Golfer[] = [];

  @ViewChild(MatTable) table!: MatTable<Golfer>;

  constructor(private Golfer: TournamentSocketDataService) { }

  ngAfterViewInit(): void {
    this.Golfer.subscribe((update: Golfer) => {
      console.log(update);
      this.dataSource.push(update);
      this.table.renderRows();
    })
  }
}
