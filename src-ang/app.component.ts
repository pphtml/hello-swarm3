import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';

import {Priklad} from './priklad';
import {PrikladComponent} from './priklad.component';
import {DashboardComponent} from './dashboard';
import {PrikladService} from './priklad.service';
import {UlohyComponent} from './ulohy.component';
import {VyberPrikladuComponent} from './vyber.prikladu.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [PrikladComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Vyber', component: VyberPrikladuComponent},
    {path: '/ulohy', name: 'Ulohy', component: UlohyComponent},
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent},
])
export class AppComponent {
}
