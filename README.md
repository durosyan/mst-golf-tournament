# MstGolfing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

![build](https://github.com/durosyan/mst-golf-tournament/actions/workflows/node.js.yml/badge.svg)

---

## What is this?

This application was built as part of my application to MSTWorld.com, this is the coding challenge for a full stack developer role.

---

## Customer Requirements

Create a simple user interface that displays the data in a basic table layout.

The data is being sent on a socket event `data-update` here: `wss://mst-full-stack-dev-test.herokuapp.com/`

- Your UI should update in real-time as data is received,
- Use of UI frameworks and libraries,
- Sorting / Searching / Filtering,
- Scalability,
- Consider future functionality (give chatgpt the data and talk to it?).

---

## UI Framework

I used `@angular/material` for the table and sorting functions

---

## Country Flags

I might've started to convert the country codes into display their relevant flags,
but I'm not sure what ISO standard the country codes are (probs olympic) but it would take some work to generate this data (probably be able to prompt gpt to do this though using the link below as context).

I got the flag svgs and the data from:
- https://www.iso.org/iso-3166-country-codes.html
- https://www.iso.org/obp/ui/#search
- https://flagpedia.net/download/api

---

## Data Model

I've made a typescript interface for the object recieved in [document.model.ts](src/app/models/document.model.ts)

---

## Scalability & Future

Since this has no server rendering and only listens to the socket, it would be perfectly feasable to horizontally scale this app.
This could be done using any clud providers edge computing functionality like AWS Cloudfront or Cloudflare

I've currently deployed this to github sites since it's the easiest for an MVP but this would not be hard to change.

In the future it should be possible to load the flags and display that. also we might want to 

---

# Dev Setup

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

