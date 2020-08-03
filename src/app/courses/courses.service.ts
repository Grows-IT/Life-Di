import { Injectable } from '@angular/core';
import { BehaviorSubject, of, from } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private _myCourse = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) { }

  get myCourse() {
    return this._myCourse.asObservable();
  }

  getMycourse(user: SocialUser) {
    // console.log(user);
    return this.http.get(environment.dbUrl + '/mycourse?id=' + user.id);
  }

  getCourse(courseId) {
    // console.log(courseId);
    return this.http.get(environment.dbUrl + '/course?courseId=' + courseId);
  }
}
