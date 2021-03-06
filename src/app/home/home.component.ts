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
  constructor(public homeService: HomeService) { }

  allJournal: any;
  allCourses: any;
  bannerPic: any;
  allNews: any;

  ngOnInit(): void {
    this.homeService.getJournal().subscribe((jour) => {
      this.allJournal = jour;
      console.log(jour);
    });

    this.homeService.getCourses().subscribe((course) => {
      this.allCourses = course;
      console.log(course);
    });

    this.homeService. getNews().subscribe((news) => {
      this.allNews = news;
    });

    this.homeService.getBanner().subscribe((banner) => this.bannerPic = banner);
  }
}
