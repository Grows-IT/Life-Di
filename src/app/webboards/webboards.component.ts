import { Component, OnInit } from '@angular/core';
import { WebboardsManagementService } from '../admin/webboards-management/webboards-management.service';

@Component({
  selector: 'app-webboards',
  templateUrl: './webboards.component.html',
  styleUrls: ['./webboards.component.scss']
})
export class WebboardsComponent implements OnInit {
  webboards;
  constructor(private webboardsService: WebboardsManagementService) { }

  ngOnInit(): void {
    this.webboardsService.getWebboards().subscribe(webs => {
      this.webboards = webs;
    });
  }


}
