import {Component, OnInit, Inject} from "@angular/core";
import {CustomerComponent} from "../customer-view/customer-view.component";
import {Customer} from "../customer-view/Customer";
import {CustomerStorageService} from "../customer-storage-service";
import {CustomerLocalStorageService} from "../customer-local-storage/customer-local-storage.service";
import {CustomerRESTStorageService} from "../customer-rest-storage/customer-rest-storage.service";

declare var $ : any;

@Component({
  selector: 'customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {
  private _customers: Customer[] = [];

  constructor(@Inject(CustomerRESTStorageService) private customerStorageService: CustomerStorageService) {
    customerStorageService.findAll().subscribe(custs => {
      for (const cust in custs) {
        this.customers.push($.extend(new Customer(), custs[cust]));
      }
    });
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
