import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {AppComponent} from './app.component';
import {ProductService} from './product.service';
import {ProductsComponent}  from './products.component';
import {ProductDetailComponent} from './product-detail.component'
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';
import  {ProductSearchComponent} from './product-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
      AppRoutingModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
      AppComponent,
      DashboardComponent,
      ProductDetailComponent,
      ProductsComponent,
      ProductSearchComponent
  ],
  providers:[
      ProductService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

