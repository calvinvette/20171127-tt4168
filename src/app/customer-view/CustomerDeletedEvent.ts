import {Customer} from "./Customer";
/**
 * Created by calvin on 3/15/17.
 */
export class CustomerDeletedEvent { // extends Event {
  constructor(private customer : Customer) {
  }
}
