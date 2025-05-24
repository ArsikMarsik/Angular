import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {TableBasicExample} from './app/data-table/data-table.component'
import{TabGroupDynamicHeightExample} from './app/tab'
import{MenuOverviewExample} from './app/menu'




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
platformBrowserDynamic().bootstrapModule(TableBasicExample)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(TabGroupDynamicHeightExample)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(MenuOverviewExample)
  .catch(err => console.error(err));
