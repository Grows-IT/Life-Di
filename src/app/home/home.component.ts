import { Component, OnInit } from '@angular/core';
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
  constructor(public homeService: HomeService) {}
  // journalSubscription: Subscription;
  allJournal: any;
  bannerPic: any;

  ngOnInit(): void {
    // this.homeService.getJournal().subscribe((jour) => console.log(jour));
    this.homeService.getJournal().subscribe((jour) => {
      this.allJournal = jour;
      console.log(jour);
    });
    this.homeService.getBanner().subscribe((banner) => this.bannerPic = banner);
  }
}
