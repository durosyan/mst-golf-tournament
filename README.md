# MstGolfing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


---

## What is this?

This application was built as part of my application to MSTWorld.com, this is the coding challenge for a full stack developer role.

---

## Requirements

Create a simple user interface that displays the data in a basic table layout.

The data is being sent on a socket event `data-update` here: `wss://mst-full-stack-dev-test.herokuapp.com/`

- Short time span: ~ 1 week
- Your UI should update in real-time as data is received 
- Use of UI frameworks and libraries
- Sorting / Searching / Filtering
- Scalability
- Consider future functionality (give chatgpt the data and talk to it?)

Example of data object emitted:

```json
{
    "MSTID": 30226,
    "Match": 11,
    "First": "Graeme",
    "Last": "Storm",
    "TVName": "Storm",
    "Sex": "M",
    "Nationality": "ENG",
    "SOD": null,
    "Score": 9,
    "Today": 9,
    "Hole1Strokes": 5,
    "Hole1STP": 1,
    "Hole2Strokes": 5,
    "Hole2STP": 0,
    "Hole3Strokes": 3,
    "Hole3STP": 0,
    "Hole4Strokes": 4,
    "Hole4STP": 0,
    "Hole5Strokes": 4,
    "Hole5STP": 0,
    "Hole6Strokes": 4,
    "Hole6STP": 0,
    "Hole7Strokes": 3,
    "Hole7STP": 0,
    "Hole8Strokes": 4,
    "Hole8STP": 0,
    "Hole9Strokes": 6,
    "Hole9STP": 1,
    "OutStrokes": 38,
    "OutSTP": 2,
    "Hole10Strokes": 3,
    "Hole10STP": 0,
    "Hole11Strokes": 5,
    "Hole11STP": 0,
    "Hole12Strokes": 4,
    "Hole12STP": 0,
    "Hole13Strokes": 5,
    "Hole13STP": 2,
    "Hole14Strokes": 5,
    "Hole14STP": 1,
    "Hole15Strokes": 5,
    "Hole15STP": 1,
    "Hole16Strokes": 5,
    "Hole16STP": 1,
    "Hole17Strokes": 3,
    "Hole17STP": 0,
    "Hole18Strokes": 7,
    "Hole18STP": 2,
    "InStrokes": 42,
    "InSTP": 7,
    "TotalStrokes": 80,
    "TotalSTP": 9,
    "tournamentID": 2020009,
    "round": 1,
    "orderInMatch": 3,
    "lastUpdated": "55:56.7",
    "status": 1,
    "leaderboardID": 184592,
    "teeStart": 1,
    "teeTime": "50:00.0",
    "holesPlayed": 18,
    "course": 1,
    "matchID": 99788,
    "Amature": 0,
    "isTeam": 0,
    "CalculatedRankInteger": 1103,
    "position": 128,
    "UniquePosition": 9999,
    "Eastern": null,
    "Handicap": 0,
    "SortPriority": null
}
```