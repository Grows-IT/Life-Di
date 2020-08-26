import { Injectable } from '@angular/core';
import { BehaviorSubject, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  private _journal = new BehaviorSubject<string>(null);

  get journal() {
    return this._journal.asObservable();
  }

  constructor(
    private http: HttpClient,
  ) { }

  getJournal(){
    return this.http.get(environment.dbUrl + '/journal');
  }
}
