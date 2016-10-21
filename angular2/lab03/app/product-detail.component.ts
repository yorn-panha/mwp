/**
 * Created by ZZ on 10/19/16.
 */
import { Component, Input } from '@angular/core';
import {Product} from './product'
@Component({
    selector: 'my-product-detail',
    template: `
        <div *ngIf="product">
          <h2>{{product.name}} details!</h2>
          <div><label>id: </label>{{product.id}}</div>
          <div>
            <label>name: </label>
            <input [(ngModel)]="product.name" placeholder="name"/>
          </div>
          <div>
            <label>category: </label>
            <input [(ngModel)]="product.category" placeholder="category"/>
          </div>
          <div>
            <label>description: </label>
            <input [(ngModel)]="product.description" placeholder="description"/>
          </div>
        </div>
    `
})
export class ProductDetailComponent {
    @Input()
    product: Product;

}

