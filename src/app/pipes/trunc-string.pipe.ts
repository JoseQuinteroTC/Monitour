import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncString'
})
export class TruncStringPipe implements PipeTransform {

  transform(value: string): string {
    let maxLength = 110;
    if (value.length > 110) {
      while (value[maxLength] != " " || !value[maxLength]){
        maxLength++;
      }
      let slicedString = value.slice(0, maxLength);
      slicedString = slicedString + "...";
      return slicedString;
    }
    return value;
  }
}
