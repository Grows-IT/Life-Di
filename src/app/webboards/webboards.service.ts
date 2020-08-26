import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebboardsService {

  constructor(private http: HttpClient) { }

  getWebboards() {
    return this.http.get(environment.dbUrl + '/webboards');
  }
}
