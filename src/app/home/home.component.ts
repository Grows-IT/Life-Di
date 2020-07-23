import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { AuthService } from '../auth/auth.service';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';
import { journalModel } from './home.model';
import { map } from 'rxjs/operators';

// tslint:disable-next-line: class-name
// class journal {
//   constructor(
//     public coverPic: string,
//     public journalTitle: string,
//     public journalInfo: string
//   ) {}
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: SocialUser;

  constructor(private authService: AuthService, public homeService: HomeService) { }

  allJournal: any;
  bannerPic: any;

  ngOnInit(): void {
    // this.homeService.getJournal().subscribe((jour) => console.log(jour));
    this.authService.getUser().subscribe(user => {
      console.log(user);

      this.user = user;
    });
    this.homeService.getJournal().subscribe((jour) => {
      this.allJournal = jour;
      console.log(jour);
    });
    this.homeService.getBanner().subscribe((banner) => this.bannerPic = banner);
  }
}
