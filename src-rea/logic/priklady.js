var _ = require('lodash');

class Uloha {
/*    abstract getInstrukce(): string;
    abstract getTextUlohy(): string;
    abstract generuj(): void;

    spravnyVysledek: string;

    chyba: boolean = false;
    zadanyVysledek: string = '';

    kontrola(): boolean {
        this.chyba = this.zadanyVysledek != this.spravnyVysledek;
        return this.chyba;
    }*/
    getSpravnyVysledek() {
        return this.spravnyVysledek;
    }
}

class NasobeniDoSta extends Uloha {
    generuj() {
        this.soucinitel1 = Math.floor(Math.random() * 11);
        this.soucinitel2 = Math.floor(Math.random() * 11);
        this.spravnyVysledek = (this.soucinitel1 * this.soucinitel2).toString();
    }

    getInstrukce() { return 'vynásob'; }

    getTextUlohy() {
        return `${this.soucinitel1} x ${this.soucinitel2}`;
    }
}

class DeleniDoSta extends Uloha {
    generuj() {
        let temp = Math.floor(Math.random() * 11);
        this.delitel = Math.floor(Math.random() * 10) + 1;
        this.delenec = this.delitel * temp;
        this.spravnyVysledek = temp.toString();
    }

    getInstrukce() { return 'vyděl'; }

    getTextUlohy() {
        return `${this.delenec} / ${this.delitel}`;
    }
}

function vygenerujScitanceASoucetDoTisicePresZaklad() {
    while (true) {
        let soucet = Math.floor(Math.random() * 800) + 200;
        let scitanec1 = Math.floor(Math.random() * (soucet - 200) + 100);
        let scitanec2 = soucet - scitanec1;

        let soucet1radu = vratCislici(scitanec1, 0) + vratCislici(scitanec2, 0);
        let soucet2radu = vratCislici(scitanec1, 1) + vratCislici(scitanec2, 1);
        if (soucet1radu >= 10) {
            soucet2radu += 1;
        }

        if (soucet1radu < 10 && soucet2radu < 10) {
            continue;
        }

        return {
            scitanec1: scitanec1,
            scitanec2: scitanec2,
            soucet: soucet
        };
    }
}

function vratCislici(cislo, rad) {
    let retezec = cislo.toString();
    let cislice = retezec.charAt(retezec.length - 1 - rad);
    return parseInt(cislice, 10);
}

class ScitaniDoTisicePresZaklad extends Uloha {
    generuj() {
        let priklad = vygenerujScitanceASoucetDoTisicePresZaklad();
        this.scitanec1 = priklad.scitanec1;
        this.scitanec2 = priklad.scitanec2;
        this.spravnyVysledek = priklad.soucet.toString();
    }

    getInstrukce() { return 'sečti'; }

    getTextUlohy() {
        return `${this.scitanec1} + ${this.scitanec2}`;
    }
}

class OdcitaniDoTisicePresZaklad extends Uloha {
    generuj() {
        let priklad = vygenerujScitanceASoucetDoTisicePresZaklad();
        this.scitanec = priklad.scitanec1;
        this.soucet = priklad.soucet;
        this.spravnyVysledek = priklad.scitanec2.toString();
    }

    getInstrukce() { return 'odečti'; }

    getTextUlohy() {
        return `${this.soucet} - ${this.scitanec}`;
    }
}

class ScitaniDo extends Uloha {
    constructor(rozsah) {
        super();
        this.rozsah = rozsah;
    }

    generuj() {
        this.spravnyVysledek = _.random(0, this.rozsah);
        this.scitanec1 = _.random(0, this.spravnyVysledek);
        this.scitanec2 = this.spravnyVysledek - this.scitanec1;
        this.spravnyVysledek = this.spravnyVysledek.toString();
    }

    getInstrukce() { return 'sečti'; }

    getTextUlohy() {
        return `${this.scitanec1} + ${this.scitanec2}`;
    }
}

class OdcitaniDo extends Uloha {
    constructor(rozsah) {
        super();
        this.rozsah = rozsah;
    }

    generuj() {
        this.soucet = _.random(0, this.rozsah);
        this.scitanec1 = _.random(0, this.soucet);
        this.scitanec2 = this.soucet - this.scitanec1;
        this.spravnyVysledek = this.scitanec2.toString();
    }

    getInstrukce() { return 'odečti'; }

    getTextUlohy() {
        return `${this.soucet} - ${this.scitanec1}`;
    }
}

export class UlohaTovarna {
    constructor(typyUloh) {
        this.typyUloh = typyUloh;
    }

    vratNahodnyTyp() {
        let index = Math.floor(Math.random() * this.typyUloh.length);
        return this.typyUloh[index];
    }

    vygeneruj() {
        let typUlohy = this.vratNahodnyTyp();
        var uloha;

        switch (typUlohy) {
            case 'nas100':
                uloha = new NasobeniDoSta();
                break;
            case 'del100':
                uloha = new DeleniDoSta();
                break;
            case 'sci.zakl1000':
                uloha = new ScitaniDoTisicePresZaklad();
                break;
            case 'odci.zakl1000':
                uloha = new OdcitaniDoTisicePresZaklad();
                break;
            case 'sci5':
                uloha = new ScitaniDo(5);
                break;
            case 'odci5':
                uloha = new OdcitaniDo(5);
                break;
            default:
                throw `Typ ulohy ${typUlohy} neni implementovany.`;
        }
        uloha.generuj();
        return uloha;
    }
}
