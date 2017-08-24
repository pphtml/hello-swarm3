import {Uloha} from './uloha';

export class Priklad {
    constructor(public uloha: Uloha) {        
    }
    
    getInstrukce(): string {
        return this.uloha.getInstrukce();
    }
    
    getTextUlohy(): string {
        return this.uloha.getTextUlohy();
    }
    
    kontrola(): boolean {
        return this.uloha.kontrola();
    }
}