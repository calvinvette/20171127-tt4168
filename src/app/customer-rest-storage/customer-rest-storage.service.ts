import {Injectable} from '@angular/core';
import {CustomerStorageService} from "../customer-storage-service";
import {Customer} from "../customer-view/Customer";
import {Observable} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var $: any;

@Injectable()
export class CustomerRESTStorageService implements CustomerStorageService {

  private static baseUrl: string = "http://" + window.location.hostname + ":1701" + "/api/customers";
  // private static jsonHeaders: Headers = new Headers({
  //   'Content-Type' : 'application/json',
  //   'Accept' : 'application/json'
  // });
  private static jsonHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // 'Access-Control-Allow-Origin' : '',
    // 'Origin' : 'http://localhost:4243'
  });
  private static jsonRequestOnlyOptions = {
    headers: CustomerRESTStorageService.jsonHeaders
  };

  private static jsonRequestResponseOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  };

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    // debugger;
    let body: any;
    try {
      body = res.json();
      // debugger;
      if (body.data && body.data !== 'null') {
        if (body.data instanceof Array) {
          return <Customer[]>body.data;
        }
        return <Customer>body.data;
      } else if (body) {
        if (body instanceof Array) {
          return <Customer[]>body;
        }
        return $.extend(new Customer(), body);
      }
    } catch (e) {
      body = res.text();
      if (body) {
        return {"data": body};
      }
    }
    return {};
  }

  private handleError(err: Response | any) {
    // debugger;
    let errMsg: string;
    if (err instanceof Response) {
      const body = err.json() || '';
      const errObj = JSON.stringify(body);
      errMsg = `${err.status} - ${err.statusText || ''} ${errObj}`;
    } else {
      errMsg = err.message ? err.message : err.toString();
    }
    return Observable.throw(errMsg);
  }


  findById(customerId: number): Observable<Customer> {
    return this.http.get(CustomerRESTStorageService.baseUrl + "/" + customerId, CustomerRESTStorageService.jsonRequestOnlyOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  findAll(): Observable<Customer[]> {
    return this.http.get(CustomerRESTStorageService.baseUrl, CustomerRESTStorageService.jsonRequestOnlyOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  remove(customer: Customer): Observable<Customer> {
    console.log("RestStorage delete:");
    console.log(customer);
    return this.http.delete(CustomerRESTStorageService.baseUrl + "/" + customer.customerId, CustomerRESTStorageService.jsonRequestResponseOptions)
    // return this.http.delete(CustomerRESTStorageService.baseUrl, customer, CustomerRESTStorageService.jsonRequestResponseOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  update(customer: Customer): Observable<Customer> {
    console.log("RestStorage update:");
    console.log(customer);
    return this.http.put(CustomerRESTStorageService.baseUrl, customer.toJSON(), CustomerRESTStorageService.jsonRequestResponseOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  insert(customer: Customer): Observable<Customer> {
    console.log("RestStorage insert:");
    console.log(customer);
    // debugger;
    return this.http.post(CustomerRESTStorageService.baseUrl, customer.toJSON(), CustomerRESTStorageService.jsonRequestResponseOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }


}
