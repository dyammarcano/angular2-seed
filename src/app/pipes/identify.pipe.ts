import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identify'
})
export class IdentifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
