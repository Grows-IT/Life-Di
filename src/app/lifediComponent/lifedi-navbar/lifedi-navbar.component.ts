import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SocialUser } from 'angularx-social-login';
import { LifediNavbarService } from './lifedi-navbar.service';

@Component({
  selector: 'app-lifedi-navbar',
  templateUrl: './lifedi-navbar.component.html',
  styleUrls: ['./lifedi-navbar.component.scss']
})
export class LifediNavbarComponent implements OnInit {
  user: SocialUser;
  path: string;
  notifications;

  constructor(private authService: AuthService, private lifediNavbarService: LifediNavbarService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.user = JSON.parse(user);
      }
    });
    this.path = window.location.pathname;
  }

  getNotification() {
    this.lifediNavbarService.getNotification().subscribe(n => {
      console.log(n);
      this.notifications = n.reverse();
    });
  }

  signout() {
    this.authService.signOut();
  }

  read(i) {
    this.notifications[i].read = true;
  }
}
