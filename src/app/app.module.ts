import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"; // TS-level import
import { AgePipe } from './age.pipe';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot() // Angular-level module import (Glue for Bootstrap
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
