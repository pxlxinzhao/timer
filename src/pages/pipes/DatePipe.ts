import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateFromMilli'})
export class DatePipe implements PipeTransform {
  transform(value, args:string[]) : any {
    return new Date(value/1).toISOString();
  }
}
