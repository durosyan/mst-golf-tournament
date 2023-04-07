import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Golfer, GolfersColumns } from '../models/document.model';
import { TournamentSocketDataService } from '../services/tournament-socket-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TournamentSocketDataService]
})
export class AppComponent implements AfterViewInit {
  title = 'mst-golfing';
  color = 'primary';
  value = 50;
  displayedColumns: string[] = GolfersColumns;
  columnsToDisplay: string[] = ['First', 'Last', 'Score', 'TotalStrokes']
  dataSource: Golfer[] = [];

  addColumn(columnKey: string) {
    this.columnsToDisplay.push(columnKey);
  }

  removeColumn() {

  }

  resetTimerAnimation() { }

  // query for element
  @ViewChild(MatTable) table!: MatTable<Golfer>;
  @ViewChild(MatProgressBarModule) progressBar!: MatProgressBarModule;

  constructor(private Golfer: TournamentSocketDataService) { }

  ngAfterViewInit(): void {
    this.Golfer.subscribe((update: Golfer) => {
      this.resetTimerAnimation();
      this.dataSource.push(update);
      this.table.renderRows();
    })
  }
}
