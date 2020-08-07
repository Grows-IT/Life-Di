import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  constructor(public homeService: HomeService) { }

  journal: any;

  ngOnInit(): void {
    this.homeService.getJournal().subscribe((jour) => {
      this.journal = jour;
      console.log(jour);
    });
  }

}
