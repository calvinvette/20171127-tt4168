import {Component, OnInit} from '@angular/core';
import {CustomerComponent} from "../customer/customer.component";
import {Customer} from "../customer/Customer";

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  private _customers: Customer[] = [];

  constructor() {
    CustomerComponent.customers[1237] = new Customer(1237, "Neville", "Longbottom", "+44 0206 931-9133", "neville@hogwarts.ac.uk");
    for (let custKey in CustomerComponent.customers) { // for .. in on a Map returns back keys (aka object properties)
      this.customers.push(CustomerComponent.customers[custKey]);
      let start = new Date(1980, 1, 1);
      let end = new Date();
      let timeRangeInMS = (end.getTime() - start.getTime());
      let randomDate: Date = new Date(start.getTime() + Math.random() *
        timeRangeInMS);
      CustomerComponent.customers[custKey].birthDate = randomDate;
    }
    // console.log("Customers: ");
    // console.log(this.customers);
  }

  ngOnInit() {
  }

  get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    this._customers = value;
  }
}
