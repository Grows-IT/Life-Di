import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }

  getActivity(user: SocialUser) {
    return this.http.get<any>(environment.dbUrl + '/getActivity?id=' + user.id);
  }


}
