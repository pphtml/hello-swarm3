System.register(['angular2/core', 'angular2/router', './priklad.service'], function(exports_1, context_1) {
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
    var core_1, router_1, priklad_service_1;
    var VyberPrikladuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (priklad_service_1_1) {
                priklad_service_1 = priklad_service_1_1;
            }],
        execute: function() {
            VyberPrikladuComponent = (function () {
                function VyberPrikladuComponent(prikladService, router) {
                    this.prikladService = prikladService;
                    this.router = router;
                    this.pocetPrikladu = 12;
                }
                VyberPrikladuComponent.prototype.ngOnInit = function () {
                    var typyUloh = this.prikladService.vratTypyUlohProTridu(3);
                    this.typyUloh = typyUloh.map(function (tu) {
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
                };
                VyberPrikladuComponent.prototype.spustitZkouseni = function () {
                    var zkousenaOblast = this.typyUloh.filter(function (tu) { return tu.vybrano; }).map(function (tu) { return { typUlohy: tu.typUlohy, typUlohyText: tu.typUlohyText }; });
                    this.prikladService.nastavZkousenoutOblast(zkousenaOblast);
                    this.prikladService.nastavPocetPrikladu(this.pocetPrikladu);
                    this.router.navigate(['Ulohy']);
                };
                VyberPrikladuComponent.prototype.neniVybranaZadnaOblast = function () {
                    return this.typyUloh.every(function (tu) { return tu.vybrano == false; });
                };
                VyberPrikladuComponent = __decorate([
                    core_1.Component({
                        selector: 'vyber-prikladu',
                        templateUrl: 'app/vyber.prikladu.component.html',
                        //directives: [PrikladComponent]
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [priklad_service_1.PrikladService, router_1.Router])
                ], VyberPrikladuComponent);
                return VyberPrikladuComponent;
            }());
            exports_1("VyberPrikladuComponent", VyberPrikladuComponent);
        }
    }
});
//# sourceMappingURL=vyber.prikladu.component.js.map