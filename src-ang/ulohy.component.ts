import {Component, OnInit} from 'angular2/core';
//import {RouteParams} from 'angular2/router';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';


import {Priklad} from './priklad';
import {PrikladComponent} from './priklad.component';
import {PrikladService} from './priklad.service';

@Component({
    templateUrl: 'app/ulohy.component.html',
    directives: [PrikladComponent, ROUTER_DIRECTIVES]
})
export class UlohyComponent implements OnInit {
    //pocetPrikladu: number = 12;
    
    priklady: Priklad[];
    zkontrolovano: boolean = false;
    pocetChyb: number = 0;
    
    constructor(private prikladService: PrikladService,
        private router: Router) {        
    }
    
    ngOnInit(): void {
        this.priklady = this.prikladService.generujPriklady();
        if (this.priklady.length == 0) {
            this.router.navigate(['Vyber']);
        }
    }
    
    zkontroluj(): void {
        if (this.jeVseVyplneno()) {
            this.pocetChyb = 0;
            for (var priklad of this.priklady) {
                //console.log(priklad.spravnyVysledek);
                //console.log(priklad.zadanyVysledek);
                let chyba = priklad.kontrola();
                if (chyba) {
                    this.pocetChyb++;
                }
            }
            this.zkontrolovano = true;
        }
    }
    
    jeVseVyplneno(): boolean {
        for (var priklad of this.priklady) {
            if (priklad.uloha.zadanyVysledek.length == 0) {
                return false;
            }
        }
        return true;
    }
}
