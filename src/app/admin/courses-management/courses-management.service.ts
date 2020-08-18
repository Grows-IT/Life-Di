import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesManagementService {

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<any>(environment.dbUrl + '/courses');
  }
}
