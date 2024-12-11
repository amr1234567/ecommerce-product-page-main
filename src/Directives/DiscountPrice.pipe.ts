import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appDiscountPrice',
  standalone: true,
})
export class DiscountPricePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let finalPrice: number = value;
    if (args.length === 0) {
      return value;
    }
    args.forEach(arg => {
      finalPrice = finalPrice - finalPrice * (arg / 100);
    });
    return parseFloat(finalPrice.toFixed(2));
  }

}
