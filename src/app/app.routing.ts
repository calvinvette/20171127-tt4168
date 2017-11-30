
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./landing/landing.component";
import {CustomerManagementComponent} from "./customer-management/customer-management.component";
import {ShippingManagementComponent} from "./shipping-management/shipping-management.component";
import {OrderManagementComponent} from "./order-management/order-management.component";
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: LandingComponent },
  { path: 'CustomerManagement', component: CustomerManagementComponent },
  { path: 'ShippingManagement', component: ShippingManagementComponent },
  { path: 'OrderManagement', component: OrderManagementComponent },

];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
