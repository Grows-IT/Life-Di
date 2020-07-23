import { Injectable } from '@angular/core';
import { BehaviorSubject, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _home = new BehaviorSubject<string>(null);

  get home() {
    return this._home.asObservable();
  }

  constructor(
    private http: HttpClient,
  ) { }

  getJournal(){
    return this.http.get(environment.dbUrl + '/courseshome');
  }

  getBanner(){
    return this.http.get(environment.dbUrl + '/bannerhome');
  }
}
