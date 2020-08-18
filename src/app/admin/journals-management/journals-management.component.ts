import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { JournalsManagementService } from './journals-management.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-journals-management',
  templateUrl: './journals-management.component.html',
  styleUrls: ['./journals-management.component.scss']
})
export class JournalsManagementComponent implements OnInit {
  @ViewChild('modalContent', { static: true })
  modalContent: TemplateRef<any>;
  journals;
  news;
  isJournal: boolean;
  modalData: {
    data: any;
  };

  constructor(private journalsManagementService: JournalsManagementService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.isJournal = true;

    this.journalsManagementService.getJournals().subscribe((jour) => {
      this.journals = jour;
      console.log(jour);
    });

    this.journalsManagementService.getNews().subscribe((n) => {
      this.news = n;
      console.log(n);
    });
  }

  journalOpen() {
    this.isJournal = true;
  }

  newsOpen() {
    this.isJournal = false;
  }

  edit(data) {
    this.modalData = { data };
    this.modal.open(this.modalContent, { size: 'lg', scrollable: true, centered: true });
  }

}
