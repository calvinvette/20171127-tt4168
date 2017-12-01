import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  private _showCustomerView: boolean = false;

  public get showCustomerView(): boolean {
    return this._showCustomerView;
  }

  public set showCustomerView(showCustomerView: boolean) {
    this._showCustomerView = showCustomerView;
  }

  constructor() {
  }

  ngOnInit() {
  }

  addCustomer() {
    this.showCustomerView = true;
  }
}
