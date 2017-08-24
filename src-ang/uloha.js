System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var TypUlohy, TypUlohyVcetneVyberu, Uloha, NasobeniDoSta, DeleniDoSta, ScitaniDoTisicePresZaklad, OdcitaniDoTisicePresZaklad, UlohaTovarna;
    function vygenerujScitanceASoucetDoTisicePresZaklad() {
        while (true) {
            var soucet = Math.floor(Math.random() * 800) + 200;
            var scitanec1 = Math.floor(Math.random() * (soucet - 200) + 100);
            var scitanec2 = soucet - scitanec1;
            var soucet1radu = vratCislici(scitanec1, 0) + vratCislici(scitanec2, 0);
            var soucet2radu = vratCislici(scitanec1, 1) + vratCislici(scitanec2, 1);
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
        var retezec = cislo.toString();
        var cislice = retezec.charAt(retezec.length - 1 - rad);
        return parseInt(cislice, 10);
    }
    return {
        setters:[],
        execute: function() {
            (function (TypUlohy) {
                TypUlohy[TypUlohy["NasobeniDoSta"] = 0] = "NasobeniDoSta";
                TypUlohy[TypUlohy["DeleniDoSta"] = 1] = "DeleniDoSta";
                TypUlohy[TypUlohy["ScitaniDoTisicePresZaklad"] = 2] = "ScitaniDoTisicePresZaklad";
                TypUlohy[TypUlohy["OdcitaniDoTisicePresZaklad"] = 3] = "OdcitaniDoTisicePresZaklad";
            })(TypUlohy || (TypUlohy = {}));
            exports_1("TypUlohy", TypUlohy);
            TypUlohyVcetneVyberu = (function () {
                function TypUlohyVcetneVyberu() {
                }
                return TypUlohyVcetneVyberu;
            }());
            exports_1("TypUlohyVcetneVyberu", TypUlohyVcetneVyberu);
            Uloha = (function () {
                function Uloha() {
                    this.chyba = false;
                    this.zadanyVysledek = '';
                }
                Uloha.prototype.kontrola = function () {
                    this.chyba = this.zadanyVysledek != this.spravnyVysledek;
                    return this.chyba;
                };
                return Uloha;
            }());
            exports_1("Uloha", Uloha);
            NasobeniDoSta = (function (_super) {
                __extends(NasobeniDoSta, _super);
                function NasobeniDoSta() {
                    _super.apply(this, arguments);
                }
                NasobeniDoSta.prototype.generuj = function () {
                    this.soucinitel1 = Math.floor(Math.random() * 11);
                    this.soucinitel2 = Math.floor(Math.random() * 11);
                    this.spravnyVysledek = (this.soucinitel1 * this.soucinitel2).toString();
                };
                NasobeniDoSta.prototype.getInstrukce = function () { return 'vynásob'; };
                NasobeniDoSta.prototype.getTextUlohy = function () {
                    return this.soucinitel1 + " x " + this.soucinitel2;
                };
                return NasobeniDoSta;
            }(Uloha));
            DeleniDoSta = (function (_super) {
                __extends(DeleniDoSta, _super);
                function DeleniDoSta() {
                    _super.apply(this, arguments);
                }
                DeleniDoSta.prototype.generuj = function () {
                    var temp = Math.floor(Math.random() * 11);
                    this.delitel = Math.floor(Math.random() * 10) + 1;
                    this.delenec = this.delitel * temp;
                    this.spravnyVysledek = temp.toString();
                    //this.spravnyVysledek = (this.soucinitel1 * this.soucinitel2).toString();
                };
                DeleniDoSta.prototype.getInstrukce = function () { return 'vyděl'; };
                DeleniDoSta.prototype.getTextUlohy = function () {
                    return this.delenec + " / " + this.delitel;
                };
                return DeleniDoSta;
            }(Uloha));
            ScitaniDoTisicePresZaklad = (function (_super) {
                __extends(ScitaniDoTisicePresZaklad, _super);
                function ScitaniDoTisicePresZaklad() {
                    _super.apply(this, arguments);
                }
                ScitaniDoTisicePresZaklad.prototype.generuj = function () {
                    var priklad = vygenerujScitanceASoucetDoTisicePresZaklad();
                    this.scitanec1 = priklad.scitanec1;
                    this.scitanec2 = priklad.scitanec2;
                    this.spravnyVysledek = priklad.soucet.toString();
                };
                ScitaniDoTisicePresZaklad.prototype.getInstrukce = function () { return 'sečti'; };
                ScitaniDoTisicePresZaklad.prototype.getTextUlohy = function () {
                    return this.scitanec1 + " + " + this.scitanec2;
                };
                return ScitaniDoTisicePresZaklad;
            }(Uloha));
            OdcitaniDoTisicePresZaklad = (function (_super) {
                __extends(OdcitaniDoTisicePresZaklad, _super);
                function OdcitaniDoTisicePresZaklad() {
                    _super.apply(this, arguments);
                }
                OdcitaniDoTisicePresZaklad.prototype.generuj = function () {
                    var priklad = vygenerujScitanceASoucetDoTisicePresZaklad();
                    this.scitanec = priklad.scitanec1;
                    this.soucet = priklad.soucet;
                    this.spravnyVysledek = priklad.scitanec2.toString();
                };
                OdcitaniDoTisicePresZaklad.prototype.getInstrukce = function () { return 'odečti'; };
                OdcitaniDoTisicePresZaklad.prototype.getTextUlohy = function () {
                    return this.soucet + " - " + this.scitanec;
                };
                return OdcitaniDoTisicePresZaklad;
            }(Uloha));
            UlohaTovarna = (function () {
                function UlohaTovarna(typyUloh) {
                    this.typyUloh = typyUloh;
                }
                UlohaTovarna.prototype.vratNahodnyTyp = function () {
                    var index = Math.floor(Math.random() * this.typyUloh.length);
                    return this.typyUloh[index];
                };
                UlohaTovarna.prototype.vygeneruj = function () {
                    var typUlohy = this.vratNahodnyTyp();
                    var uloha;
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
                };
                return UlohaTovarna;
            }());
            exports_1("UlohaTovarna", UlohaTovarna);
        }
    }
});
//# sourceMappingURL=uloha.js.map