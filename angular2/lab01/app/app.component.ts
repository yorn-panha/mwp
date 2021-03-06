import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .products {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .products li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .products li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .products li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .products .text {
    position: relative;
    top: -3px;
  }
  .products .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
,
  template:`
    <h1>{{title}}</h1>
    <h2>My Products</h2>
    <ul class="products">
      <li *ngFor="let product of products" (click)="onSelect(product)" [class.selected]="product === selectedProduct">
        <span class="badge">{{product.id}}</span> {{product.name}}
      </li>
    </ul>
    <div *ngIf="selectedProduct">
      <h2>{{selectedProduct.name}} details!</h2>
      <div><label>id: </label>{{selectedProduct.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedProduct.name" placeholder="name"/>
      </div>
      <div>
        <label>category: </label>
        <input [(ngModel)]="selectedProduct.category" placeholder="category"/>
      </div>
      <div>
        <label>description: </label>
        <input [(ngModel)]="selectedProduct.description" placeholder="description"/>
      </div>
    </div>
  `
})

export class AppComponent {
  title = 'List of Products';
  selectedProduct: Product;
  products = PRODUCTS;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}

export class Product {
  id: number;
  name: string;
  category: string;
  description?: string;
}

const PRODUCTS: Product[] = [
  { id: 1,
    name: 'iPod',
    category: 'Music Player',
    description: "Listen music"
  },
  { id: 2,
    name: 'iPhone',
    category: 'Phone',
    description: "Make calls"
  },
  { id: 3,
    name: 'iWatch',
    category: 'Watch',
    description: "Watch clock"
  },
  { id: 4,
    name: 'iPad',
    category: 'Tablet',
    description: "Read EBook"
  }
];


