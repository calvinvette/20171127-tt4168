import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer-view/customer-view.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"; // TS-level import
import { AgePipe } from './age.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { ShippingManagementComponent } from './shipping-management/shipping-management.component';
import { ShippingTableComponent } from './shipping-table/shipping-table.component';
import { LandingComponent } from './landing/landing.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { ShipmentViewComponent } from './shipment-view/shipment-view.component';
import {RouterModule} from "@angular/router";
import {AppRouting} from "./app.routing";
import {CustomerLocalStorageService} from "./customer-local-storage/customer-local-storage.service";
import {CustomerRESTStorageService} from "./customer-rest-storage/customer-rest-storage.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AgePipe,
    CustomerManagementComponent,
    ShippingManagementComponent,
    ShippingTableComponent,
    LandingComponent,
    CustomerTableComponent,
    OrderManagementComponent,
    OrderTableComponent,
    OrderViewComponent,
    ShipmentViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule.forRoot(), // Angular-level module import (Glue for Bootstrap
    AppRouting
  ],
  providers: [
    CustomerLocalStorageService,
    CustomerRESTStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
