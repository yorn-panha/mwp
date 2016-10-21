/**
 * Created by ZZ on 10/20/16.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'price-calculator',
    template: `
    <h2>Price Calculator</h2>
    <div>Product Price: <input [(ngModel)]="price"></div>
    <div>Product Quantity: <input [(ngModel)]="quantity"></div>
    <p>
      Calculate Price: {{price | calculatePrice: quantity}}
    </p>
  `
})
export class CalculatePriceComponent {
    price = 0;
    quantity = 0;
}
