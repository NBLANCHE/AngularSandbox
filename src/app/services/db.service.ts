import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DbService {

  constructor(public http: Http) { }

  configs = [
    'sample config 1', 'sample config 2', 'sample config 3', 'sample config 4', 'sample config 5'
  ];

  getConfigId() {
    return '42';
  }

  getConfigDB() {
    return this.http.get('https://localhost:80')
      .map(res => res.json());
  }

}
