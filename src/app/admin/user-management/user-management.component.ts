import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserManagementService } from './user-management.service';
import { CalendarEvent } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  @ViewChild('modalContent', { static: true })
  modalContent: TemplateRef<any>;
  typeUser = 'admin';

  users;
  modalData: {
    event: CalendarEvent;
  };

  constructor(private userManagement: UserManagementService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.userManagement.getUser().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

  edit(event: CalendarEvent): void {
    this.modalData = { event };
    this.modal.open(this.modalContent, { size: 'lg', scrollable: true, centered: true });
  }

  admin() {
    this.typeUser = 'admin';
  }

  teacher() {
    this.typeUser = 'teacher';
  }

  user() {
    this.typeUser = 'user';
  }
}
