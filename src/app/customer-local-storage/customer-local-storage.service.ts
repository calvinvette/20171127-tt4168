import { Injectable } from '@angular/core';
import {CustomerStorageService} from "../customer-storage-service";
import {Observable} from "rxjs";
import {Customer} from "../customer-view/Customer";

declare var $: any; // jQuery

@Injectable()
export class CustomerLocalStorageService implements CustomerStorageService {
  private static _lastCustomerId : number = 0;

  static nextCustomerId(): number {
    return Math.floor(Math.random() * new Date().getTime() / (1024 * 1024));
  }

  private static customersLoaded : boolean = false;

  public static customers: Customer[] = [
    // new Customer(1234, "Harry", "Potter", "harry.potter@hogwarts.ac.uk", "+44 0206-931-9185"),
    // new Customer(1235, "Ron", "Weasley", "ron.weasley@hogwarts.ac.uk", "+44 0206-931-9381"),
    // new Customer(1236, "Hermione", "Granger", "hermione.granger@hogwarts.ac.uk", "+44 0206-931-9031")
  ];

  constructor() {
    if (!CustomerLocalStorageService.customersLoaded) {
      CustomerLocalStorageService.loadFromLocalStorage();
    }
  }

  private static saveToLocalStorage() {
    window.localStorage.setItem("customers", JSON.stringify(CustomerLocalStorageService.customers));
    console.log("Saving Customers:");
    console.log(CustomerLocalStorageService.customers);
  }

  private static loadFromLocalStorage() {
    let localCustomers = JSON.parse(window.localStorage.getItem("customers"));
    for (let cust of localCustomers) {
      if (typeof cust === 'object') {
        // JSON.parse produces generic objects - we'll have to conver to actual Customer objects
        // $.extend is jQuery
        // cust = $.extend(new Customer(), cust);
        // Object.assign is more modern ECMAScript (ES5, ES6)
        cust = Object.assign(new Customer(), cust);
      }
      if ((cust.birthDate instanceof String) || (typeof cust.birthDate === 'string')) {
        try {
          //   cust.birthDate = new Date(cust._birthDate.substring(0, 10));
          cust.birthDate = new Date(cust.birthDate);
        } catch (e) {
          debugger;
          console.log("Can't change birthDate string to Date: " + e);
        }
      } else {
        cust.birthDate = new Date();
      }
      let custObj = $.extend(new Customer(), cust);
      CustomerLocalStorageService.customers.push(custObj);
      if (cust.customerId > CustomerLocalStorageService._lastCustomerId) {
        CustomerLocalStorageService._lastCustomerId = cust.customerId;
      }
    }
    CustomerLocalStorageService.customersLoaded = true;

  }

  insert(customer : Customer): Observable<Customer> {
    customer.customerId = CustomerLocalStorageService.nextCustomerId();
    CustomerLocalStorageService.customers.push(customer);
    CustomerLocalStorageService.saveToLocalStorage(); // Possibly background this using an Observable/Zone/WebWorker
    return new Observable(observer => {
      observer.next(customer);
    });
  }

  remove(customer: Customer): Observable<Customer> {
    const deletedCustomers: Customer[] = [];
    for (const custIdx in CustomerLocalStorageService.customers) {
      const cust: Customer = CustomerLocalStorageService.customers[custIdx];
      if (cust.customerId === customer.customerId) {
        // TODO - Fix this splice
        CustomerLocalStorageService.customers.splice(parseInt(custIdx, 10), 1);
        CustomerLocalStorageService.saveToLocalStorage();
        return new Observable(observer => {
          observer.next(cust);
        });
      }
    }
    return new Observable(observer => {
      observer.complete();
    });
  }

  update(customer: Customer): Observable<Customer> {
    for (const custIdx in CustomerLocalStorageService.customers) {
      const cust: Customer = CustomerLocalStorageService.customers[custIdx];
      if (cust.customerId === customer.customerId) {
        CustomerLocalStorageService.customers[custIdx] = customer;
        CustomerLocalStorageService.saveToLocalStorage();
        return new Observable(observer => {
          observer.next(cust);
        });
      }
    }
    return new Observable(observer => {
      observer.complete();
    });
  }

  findById(customerId: number): Observable<Customer> {
    for (const cust of CustomerLocalStorageService.customers) {
      if (cust.customerId === customerId) {
        return new Observable(observer => {
          observer.next(cust);
        });
      }
    }
    return new Observable(observer => {
      observer.complete();
    });
  }

  findAll(): Observable<Customer[]> {
    return new Observable(observer => {
      observer.next(CustomerLocalStorageService.customers);
    });
  }


}
