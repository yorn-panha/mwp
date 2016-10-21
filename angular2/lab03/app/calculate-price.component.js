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
var CalculatePriceComponent = (function () {
    function CalculatePriceComponent() {
        this.price = 0;
        this.quantity = 0;
    }
    CalculatePriceComponent = __decorate([
        core_1.Component({
            selector: 'price-calculator',
            template: "\n    <h2>Price Calculator</h2>\n    <div>Product Price: <input [(ngModel)]=\"price\"></div>\n    <div>Product Quantity: <input [(ngModel)]=\"quantity\"></div>\n    <p>\n      Calculate Price: {{price | calculatePrice: quantity}}\n    </p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatePriceComponent);
    return CalculatePriceComponent;
}());
exports.CalculatePriceComponent = CalculatePriceComponent;
//# sourceMappingURL=calculate-price.component.js.map