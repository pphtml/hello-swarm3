import {Injectable} from 'angular2/core';

import {Priklad} from './priklad';

import {UlohaTovarna, TypUlohy, TypUlohyPopis} from './uloha';

@Injectable()
export class PrikladService {
    zkousenaOblast: Array<TypUlohyPopis> = null;
    pocetPrikladu: number = null;    
    
    generujPriklady(): Priklad[] {
        if (!this.zkousenaOblast) return [];
        
        let typyUloh = this.zkousenaOblast.map(tu => tu.typUlohy);
        let ulohaTovarna: UlohaTovarna = new UlohaTovarna(typyUloh);
        var list: Array<Priklad> = new Array<Priklad>();
        for (var i = 0; i < this.pocetPrikladu; i++) {
            let uloha = ulohaTovarna.vygeneruj();
            let priklad = new Priklad(uloha);
            list.push(priklad);
        }
        return list;
    }
    
    vratTypyUlohProTridu(trida: number): Array<TypUlohyPopis> {
        return [
            {typUlohy: TypUlohy.NasobeniDoSta, typUlohyText: 'násobení do sta'},
            {typUlohy: TypUlohy.DeleniDoSta, typUlohyText: 'dělení do sta'},
            {typUlohy: TypUlohy.ScitaniDoTisicePresZaklad, typUlohyText: 'sčítání do tisíce přes základ'},
            {typUlohy: TypUlohy.OdcitaniDoTisicePresZaklad, typUlohyText: 'odčítání do tisíce přes základ'}
        ];
    }
    
    nastavZkousenoutOblast(zkousenaOblast: Array<TypUlohyPopis>): void {
        this.zkousenaOblast = zkousenaOblast;
    }
    
    nastavPocetPrikladu(pocetPrikladu: number): void {
        this.pocetPrikladu = pocetPrikladu;
    }
}