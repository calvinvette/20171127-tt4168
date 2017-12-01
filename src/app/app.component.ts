import {AfterViewInit, Component} from '@angular/core';
import {Customer} from "./customer-view/Customer";
import {CustomerComponent} from "./customer-view/customer-view.component";

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
  private _now: Date = new Date();

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



  get now(): Date {
    return this._now;
  }

  set now(value: Date) {
    this._now = value;
  }
}
