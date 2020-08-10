import { Component, OnInit } from '@angular/core';
import { UserManagementService } from './user-management.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  users;

  constructor(private userManagement: UserManagementService) { }

  ngOnInit(): void {
    this.userManagement.getUser().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

}
