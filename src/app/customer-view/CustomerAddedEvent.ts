import {Customer} from "./Customer";
/**
 * Created by calvin on 3/15/17.
 */
export class CustomerAddedEvent { // extends Event {
  constructor(private customer : Customer) {
  }
}
