import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SystemReportService {

  constructor(private http: HttpClient) { }

  getReport() {
    return this.http.get<any>(environment.dbUrl + '/systemReport');
  }
}
