import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HomeService } from 'src/app/home/home.service';
import { SocialUser } from 'angularx-social-login';
import { CoursesService } from '../courses.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  constructor(private courseService: CoursesService, private authService: AuthService, private activatedRoute: ActivatedRoute) {
  }

  user: SocialUser;
  allCourses: any;
  courseId: string;
  course: any;

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      // console.log(user);
      if (user) {
        this.user = JSON.parse(user);
      }
    });
    this.activatedRoute.params.subscribe((params) => {
      this.courseId = params.courseId;
      // console.log(params);
    });

    this.courseService.getCourse(this.courseId).subscribe((course) => {
      this.course = course;
      console.log(course);
    });
  }



}
