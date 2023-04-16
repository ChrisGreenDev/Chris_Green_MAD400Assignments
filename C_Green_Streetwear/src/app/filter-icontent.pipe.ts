import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterIContent'
})
export class FilterIContentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
