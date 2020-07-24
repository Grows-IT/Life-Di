import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(public homeService: HomeService) { }

  allCourses: any;

  ngOnInit(): void {

    this.homeService.getCourses().subscribe((course) => {
      this.allCourses = course;
      console.log(course);
    });
  }

}
