import { Component, OnInit } from '@angular/core';
import { JournalService } from './journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  constructor(public journalService: JournalService) { }

  journal: any;

  ngOnInit(): void {
    this.journalService.getJournal().subscribe((jour) => {
      console.log(jour);
      this.journal = jour;
    });
  }

}
