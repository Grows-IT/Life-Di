import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CoursesManagementService } from './courses-management.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-courses-management',
  templateUrl: './courses-management.component.html',
  styleUrls: ['./courses-management.component.scss']
})
export class CoursesManagementComponent implements OnInit {
  @ViewChild('modalContent', { static: true })
  modalContent: TemplateRef<any>;

  @ViewChild('modalLessonContent', { static: true })
  modalLessonContent: TemplateRef<any>;
  // tslint:disable-next-line: member-ordering
  modalData: {
    course: any;
  };
  modalRef;
  courseForm: FormGroup;

  user: SocialUser;
  isCourseOpen: boolean;
  courses: any;
  coursesClose = [];
  coursesOpen = [];

  constructor(private coursesManagementService: CoursesManagementService, private authService: AuthService, private modal: NgbModal, private formBuilder: FormBuilder) {
    this.courseForm = this.formBuilder.group({
      // courseId: [this.coursesOpen.length + 1],
      coursePic: ['', Validators.required],
      courseTitle: ['', Validators.required],
      courseInfo: ['', Validators.required],
      courseProgress: 0,
      courseCategory: ['', Validators.required]
    });

    this.authService.getUser().subscribe(user => {
      if (user) {
        this.user = JSON.parse(user);
      }
    });
  }

  ngOnInit(): void {
    this.isCourseOpen = true;

    this.coursesManagementService.getCourses().subscribe(courses => {
      this.courses = courses;

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < courses.length; i++) {
        if (new Date().getTime() > new Date(courses[i].courseEnd).getTime()) {
          this.coursesClose.push(courses[i]);
        } else {
          this.coursesOpen.push(courses[i]);
        }
      }
    });
  }

  courseOpen() {
    this.isCourseOpen = true;
  }

  courseClose() {
    this.isCourseOpen = false;
  }

  edit(course) {
    this.modalData = { course };
    this.modal.open(this.modalContent, { size: 'lg', scrollable: true, centered: true, backdrop: 'static' });
  }

  openLesson(course){
    this.modalData = { course };
    this.modal.open(this.modalLessonContent, { size: 'lg', scrollable: true, centered: true, backdrop: 'static' });
  }

  addCourse(): void {
    this.courseForm.reset();
    this.modalData = null;
    this.modalRef = this.modal.open(this.modalContent, { size: 'lg', scrollable: true, centered: true, backdrop: 'static' });
  }

  confirm(data): void {
    console.log(data);

    this.coursesOpen = [
      ...this.coursesOpen,
      {
        courseId: this.courses.length + 1,
        coursePic: data.coursePic,
        courseTitle: data.courseTitle,
        courseInfo: data.courseInfo,
        courseProgress: 0,
        createDate: new Date(),
        // courseEnd: '',
        courseCategory: data.courseCategory,
        courseLesson: [{
          lessonName: '',
          topic: [{
            topicName: ''
          }]
        }],
        aboutCourse: {
          courseDetail: '',
          // id ผู้สร้าง
          courseBy: {
            name: this.user.name,
            description: '',
            profilePic: ''
          },
        },
        courseReview: {
          courseRating: 0,
          courseReviewNumber: 0,
          review: []
        },
        chatCourse: {
          comment: []
        }
      },
    ];
    console.log(this.coursesOpen);

    this.modalRef.close();
  }

  update(data): void {
    // this.coursesOpen
    console.log(data);
  }
}
