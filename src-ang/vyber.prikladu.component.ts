import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {TypUlohyPopis, TypUlohy, TypUlohyVcetneVyberu} from './uloha';
import {PrikladService} from './priklad.service';

@Component({
    selector: 'vyber-prikladu',
    templateUrl: 'app/vyber.prikladu.component.html',
    //directives: [PrikladComponent]
    directives: [ROUTER_DIRECTIVES]
})
export class VyberPrikladuComponent implements OnInit {
    constructor(private prikladService: PrikladService, private router: Router) {        
    }
    
    pocetPrikladu: number = 12;       
    typyUloh: Array<TypUlohyVcetneVyberu>;
    
    ngOnInit(): void {
        let typyUloh = this.prikladService.vratTypyUlohProTridu(3);
        this.typyUloh = typyUloh.map(tu => {
/*            let tuvv = new TypUlohyVcetneVyberu();
            tuvv.typUlohy = tu.typUlohy;
            tuvv.typUlohyText = tu.typUlohyText;
            tuvv.vybrano = false; 
            return tuvv;*/
            return {
                typUlohy: tu.typUlohy,
                typUlohyText: tu.typUlohyText,
                vybrano: false
            };
        });
    }
    
    spustitZkouseni(): void {
        let zkousenaOblast = this.typyUloh.filter(tu => tu.vybrano).map(tu => {return {typUlohy: tu.typUlohy, typUlohyText: tu.typUlohyText}});
        this.prikladService.nastavZkousenoutOblast(zkousenaOblast);
        this.prikladService.nastavPocetPrikladu(this.pocetPrikladu);
        this.router.navigate(['Ulohy']);
    }
    
    neniVybranaZadnaOblast(): boolean {
        return this.typyUloh.every(tu => tu.vybrano == false);
    }
}
