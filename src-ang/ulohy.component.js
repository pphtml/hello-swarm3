System.register(['angular2/core', 'angular2/router', './priklad.component', './priklad.service'], function(exports_1, context_1) {
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
    var core_1, router_1, priklad_component_1, priklad_service_1;
    var UlohyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (priklad_component_1_1) {
                priklad_component_1 = priklad_component_1_1;
            },
            function (priklad_service_1_1) {
                priklad_service_1 = priklad_service_1_1;
            }],
        execute: function() {
            UlohyComponent = (function () {
                function UlohyComponent(prikladService, router) {
                    this.prikladService = prikladService;
                    this.router = router;
                    this.zkontrolovano = false;
                    this.pocetChyb = 0;
                }
                UlohyComponent.prototype.ngOnInit = function () {
                    this.priklady = this.prikladService.generujPriklady();
                    if (this.priklady.length == 0) {
                        this.router.navigate(['Vyber']);
                    }
                };
                UlohyComponent.prototype.zkontroluj = function () {
                    if (this.jeVseVyplneno()) {
                        this.pocetChyb = 0;
                        for (var _i = 0, _a = this.priklady; _i < _a.length; _i++) {
                            var priklad = _a[_i];
                            //console.log(priklad.spravnyVysledek);
                            //console.log(priklad.zadanyVysledek);
                            var chyba = priklad.kontrola();
                            if (chyba) {
                                this.pocetChyb++;
                            }
                        }
                        this.zkontrolovano = true;
                    }
                };
                UlohyComponent.prototype.jeVseVyplneno = function () {
                    for (var _i = 0, _a = this.priklady; _i < _a.length; _i++) {
                        var priklad = _a[_i];
                        if (priklad.uloha.zadanyVysledek.length == 0) {
                            return false;
                        }
                    }
                    return true;
                };
                UlohyComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/ulohy.component.html',
                        directives: [priklad_component_1.PrikladComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [priklad_service_1.PrikladService, router_1.Router])
                ], UlohyComponent);
                return UlohyComponent;
            }());
            exports_1("UlohyComponent", UlohyComponent);
        }
    }
});
//# sourceMappingURL=ulohy.component.js.map