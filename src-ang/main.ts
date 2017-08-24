import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent} from './app.component';

//import {enableProdMode} from 'angular2/core';

import {PrikladService} from './priklad.service';

//enableProdMode()
bootstrap(AppComponent, [ROUTER_PROVIDERS, PrikladService]);
