import {Customer} from "./customer-view/Customer";
import {Observable} from "rxjs/Observable";

export interface CustomerStorageService {
  insert(customer: Customer): Observable<Customer>;
  update(customer: Customer): Observable<Customer>;
  findById(customerId: number): Observable<Customer>;
  remove(customer: Customer): Observable<Customer>;
  findAll(): Observable<Customer[]>;
}
