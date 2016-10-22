/**
 * Created by ZZ on 10/21/16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import {ProductsComponent}  from './products.component';
import {ProductDetailComponent} from './product-detail.component'

const routes: Routes = [
    {
        path: "products",
        component: ProductsComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: ProductDetailComponent,
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
