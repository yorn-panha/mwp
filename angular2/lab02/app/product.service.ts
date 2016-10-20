/**
 * Created by ZZ on 10/19/16.
 */
import { Injectable } from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './mock-products'
@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }
}

