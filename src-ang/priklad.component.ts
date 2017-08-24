import {Component, Input} from 'angular2/core';

import {Priklad} from './priklad';

@Component({
    selector: 'priklad',
    templateUrl: 'app/priklad.component.html'
})
export class PrikladComponent {
    @Input() priklad: Priklad;
}