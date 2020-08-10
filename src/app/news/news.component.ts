import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(public homeService: HomeService) { }

  allNews: any;

  ngOnInit(): void {
    this.homeService. getNews().subscribe((news) => {
      this.allNews = news;
    });
  }

}
