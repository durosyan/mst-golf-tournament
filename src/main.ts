import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Boilerplate for angular
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
