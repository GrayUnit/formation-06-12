import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Order, ...args: any[]): any {
    if(value) {
      if(args[0] === 'ttc') {
        return value.totalTtc();
      }
      this.toto();
      return value.totalHt();
    }
    return null;
  }

  private toto() {
    console.log("test");
  }

}
