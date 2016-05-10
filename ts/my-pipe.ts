import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipe implements PipeTransform {

  // Example Pipe transform
  transform(value: any, args: any[] = null): string {
    return value;
  }

}
