import { Component, OnInit } from '@angular/core';
import { WebboardsManagementService } from 'src/app/admin/webboards-management/webboards-management.service';

@Component({
  selector: 'app-webboard',
  templateUrl: './webboard.component.html',
  styleUrls: ['./webboard.component.scss']
})
export class WebboardComponent implements OnInit {

  webboards;
  constructor(private webboardsService: WebboardsManagementService) { }

  ngOnInit(): void {
    this.webboardsService.getWebboards().subscribe(webs => {
      this.webboards = webs;
    });
  }

}
