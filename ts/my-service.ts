import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

  // Example Service Function
  echoMyData(data: any): any {
    return data;
  }
}
