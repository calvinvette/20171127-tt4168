import {AfterViewInit, Component} from '@angular/core';
import {Customer} from "./customer/Customer";
import {CustomerComponent} from "./customer/customer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: ```
//     <!--The content below is only a placeholder and can be replaced.-->
// <div style="text-align:center">
//   <h1>
//     Welcome to {{ title }}!
//   </h1>
// <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
//   </div>
//   <h2>Here are some links to help you start: </h2>
// <ul>
// <li>
//   <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
// </li>
// <li>
// <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
// </li>
// <li>
// <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
// </li>
// </ul>
//   ```,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  private _title = 'My Very Cool App';
  private _navbarCollapsed: boolean = false;
  public defaultCustomerId: number = 1234;
  private _customers: Customer[] = [ ];

  // cust: Customer = new Customer(1235, "Hermione", "Granger", "+44 0206 918-1951", "hermoine@hogwarts.ac.uk", new Date(1979, 8, 17))
  // firstName = "Hermione";
  // birthDate = new Date(1979, 8, 17);
  private _now: Date = new Date();

  constructor() {
    CustomerComponent.customers[1237] = new Customer(1237, "Neville", "Longbottom", "+44 0206 931-9133", "neville@hogwarts.ac.uk");
    for (let custKey in CustomerComponent.customers) { // for .. in on a Map returns back keys (aka object properties)
      this.customers.push(CustomerComponent.customers[custKey]);
      let start = new Date(1980, 1, 1);
      let end = new Date();
      let timeRangeInMS = (end.getTime() - start.getTime());
      let randomDate : Date = new Date(start.getTime() + Math.random() *
        timeRangeInMS);
      CustomerComponent.customers[custKey].birthDate = randomDate;
    }
    console.log("Customers: ");
    console.log(this.customers);
  }

  ngAfterViewInit() {
    // CustomerComponent.customers[1237] = new Customer(1237, "Neville", "Longbottom", null, null);
  }

  toggleTheNavBar() {
    this._navbarCollapsed = !this._navbarCollapsed;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get navbarCollapsed(): boolean {
    return this._navbarCollapsed;
  }

  set navbarCollapsed(value: boolean) {
    this._navbarCollapsed = value;
  }

  get customers(): Customer[] {
    return this._customers;
  }

  set customers(value: Customer[]) {
    this._customers = value;
  }

  get now(): Date {
    return this._now;
  }

  set now(value: Date) {
    this._now = value;
  }
}
