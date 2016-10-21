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
 * Created by ZZ on 10/18/16.
 */
var core_1 = require('@angular/core');
var product_1 = require('./product');
var ProductFormComponent = (function () {
    function ProductFormComponent() {
        this.categories = ['Phone', 'Tablet',
            'Music Player', 'Watch'];
        this.product = new product_1.Product(3, 'iPod', this.categories[2], 'Listen music');
        this.submitted = false;
    }
    ProductFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(ProductFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.product); },
        enumerable: true,
        configurable: true
    });
    ProductFormComponent = __decorate([
        core_1.Component({
            selector: 'product-form',
            templateUrl: 'app/product-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductFormComponent);
    return ProductFormComponent;
}());
exports.ProductFormComponent = ProductFormComponent;
//# sourceMappingURL=product-form.component.js.map