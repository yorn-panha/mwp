import { Component } from '@angular/core';
import { Product } from './product';
import {ProductService} from './product.service';
import { OnInit } from '@angular/core';
import  {Router} from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'my-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
  providers: [ProductService]
})

export class ProductsComponent implements OnInit{
  constructor(
      private router: Router,
      private productService: ProductService) { }


  selectedProduct: Product;
  // products = PRODUCTS;
  products: Product[];
  onSelect(product: Product): void {
    this.selectedProduct = product;

  }
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}








