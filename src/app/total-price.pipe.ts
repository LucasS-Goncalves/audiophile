import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {

  transform(value: any): any {
    let number = value.toString().split('.');
    number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return number.join('.');
  }

}
