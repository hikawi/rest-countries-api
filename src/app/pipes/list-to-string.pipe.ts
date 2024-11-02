import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listToString',
  standalone: true
})
export class ListToStringPipe implements PipeTransform {

  transform(value: string[] | undefined): string {
    if (!value || value.length === 0) {
      return "N/A";
    } else if (value.length === 1) {
      return value[0];
    } else if (value.length === 2) {
      return `${value[0]} and ${value[1]}`;
    } else {
      let s = "";
      for (let index = 0; index < value.length; index++) {
        const element = value[index];
        if (index === value.length - 2) {
          s += `${element} and ${value[index + 1]}`;
          break;
        } else {
          s += `${element}, `;
        }
      }
      return s;
    }
  }

}
