System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Priklad;
    return {
        setters:[],
        execute: function() {
            Priklad = (function () {
                function Priklad(uloha) {
                    this.uloha = uloha;
                }
                Priklad.prototype.getInstrukce = function () {
                    return this.uloha.getInstrukce();
                };
                Priklad.prototype.getTextUlohy = function () {
                    return this.uloha.getTextUlohy();
                };
                Priklad.prototype.kontrola = function () {
                    return this.uloha.kontrola();
                };
                return Priklad;
            }());
            exports_1("Priklad", Priklad);
        }
    }
});
//# sourceMappingURL=priklad.js.map