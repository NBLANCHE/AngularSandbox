import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }

  configs = [
    'sample config 1', 'sample config 2', 'sample config 3'
  ];

  getConfigId() {
    return '42';
  }

}
