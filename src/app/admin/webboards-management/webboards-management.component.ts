import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { WebboardsManagementService } from './webboards-management.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forums-management',
  templateUrl: './webboards-management.component.html',
  styleUrls: ['./webboards-management.component.scss']
})
export class WebboardsManagementComponent implements OnInit {
  @ViewChild('modalWebboard', { static: true }) modalWebboard: TemplateRef<any>;
  modalData: {
    data: any;
  };
  webboards;

  constructor(private webboardsService: WebboardsManagementService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.webboardsService.getWebboards().subscribe(webboards => {
      this.webboards = webboards;
    });
  }

  edit(data) {
    console.log(data);

    this.modalData = { data };
    this.modal.open(this.modalWebboard, { size: 'lg', scrollable: true, centered: true });
  }

}
