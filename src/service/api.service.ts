import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private PATH_API = 'http://5dccf96ed795470014e4ca57.mockapi.io/trananh0810githubio/edu';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.PATH_API);
  }

  // async getData() {
  //   const listUser = await axios.get(this.PATH_API);
  //
  //   return listUser.data;
  // }
}
