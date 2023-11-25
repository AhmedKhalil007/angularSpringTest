import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import * as Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  accessibility(Highcharts);
