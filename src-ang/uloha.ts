export enum TypUlohy {
    NasobeniDoSta,
    DeleniDoSta,
    ScitaniDoTisicePresZaklad,
    OdcitaniDoTisicePresZaklad
}

export interface TypUlohyPopis {
    typUlohy: TypUlohy;
    typUlohyText: string;
}

export class TypUlohyVcetneVyberu implements TypUlohyPopis {
    typUlohy: TypUlohy;
    typUlohyText: string;
    vybrano: boolean;    
}

export abstract class Uloha {
    abstract getInstrukce(): string;
    abstract getTextUlohy(): string;
    abstract generuj(): void;
    
    spravnyVysledek: string;

    chyba: boolean = false;
    zadanyVysledek: string = '';
    
    kontrola(): boolean {
        this.chyba = this.zadanyVysledek != this.spravnyVysledek;
        return this.chyba;
    }                
}

class NasobeniDoSta extends Uloha {
    soucinitel1: number;
    soucinitel2: number;
    
    generuj(): void {
        this.soucinitel1 = Math.floor(Math.random() * 11); 
        this.soucinitel2 = Math.floor(Math.random() * 11);
        this.spravnyVysledek = (this.soucinitel1 * this.soucinitel2).toString();
    }
    
    getInstrukce(): string { return 'vynásob'; }
    
    getTextUlohy(): string {
        return `${this.soucinitel1} x ${this.soucinitel2}`;
    }
}

class DeleniDoSta extends Uloha {
    delenec: number;
    delitel: number;
    
    generuj(): void {
        let temp = Math.floor(Math.random() * 11); 
        this.delitel = Math.floor(Math.random() * 10) + 1;
        this.delenec = this.delitel * temp;
        this.spravnyVysledek = temp.toString();
        //this.spravnyVysledek = (this.soucinitel1 * this.soucinitel2).toString();
    }

    getInstrukce(): string { return 'vyděl'; }
    
    getTextUlohy(): string {
        return `${this.delenec} / ${this.delitel}`;
    }
}

interface ScitanciASoucet {
    scitanec1: number;
    scitanec2: number;
    soucet: number;    
}

function vygenerujScitanceASoucetDoTisicePresZaklad(): ScitanciASoucet {
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

class ScitaniDoTisicePresZaklad extends Uloha {
    scitanec1: number;
    scitanec2: number;
    
    generuj(): void {
        let priklad = vygenerujScitanceASoucetDoTisicePresZaklad();
        this.scitanec1 = priklad.scitanec1;
        this.scitanec2 = priklad.scitanec2;
        this.spravnyVysledek = priklad.soucet.toString();
    }

    getInstrukce(): string { return 'sečti'; }
    
    getTextUlohy(): string {
        return `${this.scitanec1} + ${this.scitanec2}`;
    }
}

class OdcitaniDoTisicePresZaklad extends Uloha {
    scitanec: number;
    soucet: number;
    
    generuj(): void {
        let priklad = vygenerujScitanceASoucetDoTisicePresZaklad();
        this.scitanec = priklad.scitanec1;
        this.soucet = priklad.soucet;
        this.spravnyVysledek = priklad.scitanec2.toString();
    }

    getInstrukce(): string { return 'odečti'; }
    
    getTextUlohy(): string {
        return `${this.soucet} - ${this.scitanec}`;
    }
}

function vratCislici(cislo: number, rad: number): number {
    let retezec = cislo.toString();
    let cislice = retezec.charAt(retezec.length - 1 - rad);
    return parseInt(cislice, 10);
}

export class UlohaTovarna {
    constructor(private typyUloh: TypUlohy[]) {
        
    }
    
    private vratNahodnyTyp(): TypUlohy {
        let index = Math.floor(Math.random() * this.typyUloh.length);
        return this.typyUloh[index];
    }
    
    vygeneruj(): Uloha {
        let typUlohy: TypUlohy = this.vratNahodnyTyp();
        let uloha: Uloha;
        
        switch (typUlohy) {
            case TypUlohy.NasobeniDoSta:
                uloha = new NasobeniDoSta(); 
                break;
            case TypUlohy.DeleniDoSta:
                uloha = new DeleniDoSta(); 
                break;
            case TypUlohy.ScitaniDoTisicePresZaklad:
                uloha = new ScitaniDoTisicePresZaklad();
                break;
            case TypUlohy.OdcitaniDoTisicePresZaklad:
                uloha = new OdcitaniDoTisicePresZaklad();
                break;
        }
        uloha.generuj();
        return uloha;
    }
}




    
