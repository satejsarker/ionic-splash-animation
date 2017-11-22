import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import axios from 'axios';

/*
  Generated class for the DatasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatasProvider {
  datas: any = [];
  satej: boolean = true;
  newslists: any;
  constructor(public http: HttpClient) {
    //console.log('Hello DatasProvider Provider');
  }
  getData() {
    return this.http.get("http://localhost:8000/homenational");

    // axios.get('http://localhost:8000/homenational')
    // .then(function (response) {
    //   //this.data =  response.data;
    //   this.data=response.data;
    //   console.log(response.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
}
