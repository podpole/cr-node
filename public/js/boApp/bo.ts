import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BoModule } from './bo.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(BoModule);