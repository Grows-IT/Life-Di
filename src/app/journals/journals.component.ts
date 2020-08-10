import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.scss']
})
export class JournalsComponent implements OnInit {

  constructor(public homeService: HomeService) { }

  allJournal: any;

  ngOnInit(): void {
    this.homeService.getJournal().subscribe((jour) => {
      this.allJournal = jour;
      console.log(jour);
    });
  }

}
