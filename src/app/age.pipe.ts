import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birthDate: any, args?: any): any {
    let now : Date = new Date();
    let age = (now.getTime() - birthDate.getTime()) / (1000 * 3600 * 24 * 365.25);
    return Math.floor(age) + "yrs, " + Math.floor((age % 1 * 12)) + "mos";
  }

}
