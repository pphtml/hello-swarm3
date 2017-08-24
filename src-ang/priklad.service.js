System.register(['angular2/core', './priklad', './uloha'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, priklad_1, uloha_1;
    var PrikladService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (priklad_1_1) {
                priklad_1 = priklad_1_1;
            },
            function (uloha_1_1) {
                uloha_1 = uloha_1_1;
            }],
        execute: function() {
            PrikladService = (function () {
                function PrikladService() {
                    this.zkousenaOblast = null;
                    this.pocetPrikladu = null;
                }
                PrikladService.prototype.generujPriklady = function () {
                    if (!this.zkousenaOblast)
                        return [];
                    var typyUloh = this.zkousenaOblast.map(function (tu) { return tu.typUlohy; });
                    var ulohaTovarna = new uloha_1.UlohaTovarna(typyUloh);
                    var list = new Array();
                    for (var i = 0; i < this.pocetPrikladu; i++) {
                        var uloha = ulohaTovarna.vygeneruj();
                        var priklad = new priklad_1.Priklad(uloha);
                        list.push(priklad);
                    }
                    return list;
                };
                PrikladService.prototype.vratTypyUlohProTridu = function (trida) {
                    return [
                        { typUlohy: uloha_1.TypUlohy.NasobeniDoSta, typUlohyText: 'násobení do sta' },
                        { typUlohy: uloha_1.TypUlohy.DeleniDoSta, typUlohyText: 'dělení do sta' },
                        { typUlohy: uloha_1.TypUlohy.ScitaniDoTisicePresZaklad, typUlohyText: 'sčítání do tisíce přes základ' },
                        { typUlohy: uloha_1.TypUlohy.OdcitaniDoTisicePresZaklad, typUlohyText: 'odčítání do tisíce přes základ' }
                    ];
                };
                PrikladService.prototype.nastavZkousenoutOblast = function (zkousenaOblast) {
                    this.zkousenaOblast = zkousenaOblast;
                };
                PrikladService.prototype.nastavPocetPrikladu = function (pocetPrikladu) {
                    this.pocetPrikladu = pocetPrikladu;
                };
                PrikladService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PrikladService);
                return PrikladService;
            }());
            exports_1("PrikladService", PrikladService);
        }
    }
});
//# sourceMappingURL=priklad.service.js.map