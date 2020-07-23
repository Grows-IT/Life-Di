import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: SocialUser;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.authService.getUser().subscribe(user => {
    this.authService.getUser().subscribe(user => {
      console.log(user);

      this.user = user;
    });
  }

}
