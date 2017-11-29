import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, AfterViewInit {
  private _customer: Customer = new Customer(); // Current working customer
  private _customerId: number = 1234; // current working customerId
  private _state: String = "view";


  // Pseudo-Customer DB; a "map" or "dictionary" or "associative array"
  private static _customers : any = { // static variables belong to the class (shared), not the instance
 	"1234" : new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185"),
 	"1235" : new Customer(1235, "Ron", "Weasley", "ron.weasley@hogwarts.ac.uk", "+44 0206-931-9381"),
 	"1236" : new Customer(1236, "Hermione", "Granger", "hermione.granger@hogwarts.ac.uk", "+44 0206-931-9031")
  };

  constructor() {
 	// this.customer = new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
  }

  bdChange(src, $event) {
    this.customer.birthDate =
      CustomerComponent.ngbToDate($event);
      //CustomerComponent.ngbToDate($event.srcElement.value);
    console.log(this.customer.birthDate);
  }

  static ngbToDate(dateIn: any): Date {
    if ((dateIn instanceof Date) || ((dateIn instanceof Object) && (dateIn.getUTCDate))) {
      // It's a Date object
      return Object.assign(new Date(), dateIn);
    } else if ((dateIn instanceof String) || (typeof dateIn === 'string')) { // Assume a String/string yyyy-mm-dd format
      const inStr = dateIn.toString();
      const year = inStr.substring(0, 4);
      const month = inStr.substring(5, 7);
      const day = inStr.substring(8, 10);
      return new Date(parseInt(year, 10),
        parseInt(month, 10) - 1,
        parseInt(day, 10));
    } else if ((dateIn instanceof Object) && (dateIn.month)) {
      // Assume a NgbDateStruct or similar object
      return new Date(dateIn.year, dateIn.month - 1, dateIn.day); }
  }

  ngOnInit() {
    this._customer = CustomerComponent.customers[this._customerId];
    // this._customer = new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185");
  }
  ngAfterViewInit() {

  }

  onClick($event) {
    console.log(this.customer.firstName + " was clicked!");
    console.log($event);
  }

  onHover($event) {
    console.log(this.customer.firstName + " is being hovered over!");
  }
  //
  // ageInYears(): number {
  //   return Math.floor(this.customer.age);
  // }

  update() {
    console.log(this.customer);
    this.state = 'view';
  }

  get customer(): Customer {
    return this._customer;
  }

  set customer(value: Customer) {
    this._customer = value;
  }

  get customerId(): number {
    return this._customerId;
  }

  @Input()
  set customerId(value: number) {
    this._customerId = value;
  }

  static get customers(): any {
    return this._customers;
  }

  static set customers(value: any) {
    this._customers = value;
  }

  get state(): String {
    return this._state;
  }

  set state(value: String) {
    this._state = value;
  }
}
