import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SocialUser } from 'angularx-social-login';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.scss']
})
export class MycourseComponent implements OnInit {
  myCourse;
  user: SocialUser;

  constructor(private authService: AuthService, private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      // console.log(user);
      if (user) {
        this.user = JSON.parse(user);
      }
    });

    this.coursesService.getMycourse(this.user).subscribe(myCourse => {
      this.myCourse = myCourse;
      console.log(this.myCourse);

    });
  }

}
