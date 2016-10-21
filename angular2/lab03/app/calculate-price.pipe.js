"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by ZZ on 10/20/16.
 */
var core_1 = require('@angular/core');
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
 */
var CalculatePricePipe = (function () {
    function CalculatePricePipe() {
    }
    CalculatePricePipe.prototype.transform = function (value, value1) {
        // let exp = parseFloat(value1);
        return value * value1;
    };
    CalculatePricePipe = __decorate([
        core_1.Pipe({ name: 'calculatePrice' }), 
        __metadata('design:paramtypes', [])
    ], CalculatePricePipe);
    return CalculatePricePipe;
}());
exports.CalculatePricePipe = CalculatePricePipe;
//# sourceMappingURL=calculate-price.pipe.js.map