import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { SocialUser } from 'angularx-social-login';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private homeService: HomeService, private authService: AuthService) { }
  user: SocialUser;
  allCourses: any;

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      console.log(user);
      if (user) {
        this.user = JSON.parse(user);
      }
    });

    this.homeService.getCourses().subscribe((course) => {
      this.allCourses = course;
      console.log(course);
    });
  }

}
