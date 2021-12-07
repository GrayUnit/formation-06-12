import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if(value) {
      if(value.length > 10) {
        return value.toUpperCase();
      }
      return value.toLocaleLowerCase();
    }
    return null;
  }

}
