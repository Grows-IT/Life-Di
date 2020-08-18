import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JournalsManagementService {

  constructor(private http: HttpClient) { }

  getJournals() {
    return this.http.get(environment.dbUrl + '/journals');
  }

  getNews() {
    return this.http.get(environment.dbUrl + '/news');
  }

}
