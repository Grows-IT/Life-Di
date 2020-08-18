import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CoursesManagementService } from './courses-management.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses-management',
  templateUrl: './courses-management.component.html',
  styleUrls: ['./courses-management.component.scss']
})
export class CoursesManagementComponent implements OnInit {
  @ViewChild('modalContent', { static: true })
  modalContent: TemplateRef<any>;
  // tslint:disable-next-line: member-ordering
  modalData: {
    course: any;
  };
  modalRef;
  courseForm: FormGroup;

  isCouseOpen: boolean;
  courses: any;
  coursesClose = [];
  coursesOpen = [];

  constructor(private coursesManagementService: CoursesManagementService, private modal: NgbModal, private formBuilder: FormBuilder) {
    this.courseForm = this.formBuilder.group({
      courseId: [this.coursesOpen.length + 1],
      coursePic: ['', Validators.required],
      courseTitle: ['', Validators.required],
      courseInfo: ['', Validators.required],
      courseProgress: 0,
      // courseStart: ['', Validators.required],
      // courseEnd: ['', Validators.required],
      courseCategory: ['', Validators.required]
    });
    // this.courseForm = this.formBuilder.group({
    //   courseId: this.coursesOpen.length + 1,
    //   coursePic: '',
    //   courseTitle: '',
    //   courseInfo: '',
    //   courseProgress: 0,
    //   courseStart: '',
    //   courseEnd: '',
    //   courseCategory: '',
    //   courseLesson: [{
    //     lessonName: '',
    //     topic: [{
    //       topicName: ''
    //     }]W
    //   }],
    //   aboutCourse: {
    //     courseDetail: '',
    //     // id ผู้สร้าง
    //     courseBy: {
    //       name: '',
    //       description: '',
    //       profilePic: ''
    //     },
    //   },
    //   courseReview: {
    //     courseRating: 0,
    //     courseReviewNumber: 0,
    //     review: []
    //   },
    //   chatCourse: {
    //     comment: []
    //   }
    // });
  }

  ngOnInit(): void {
    this.isCouseOpen = true;

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
    this.isCouseOpen = true;
  }

  courseClose() {
    this.isCouseOpen = false;
  }

  edit(course) {
    this.modalData = { course };
    this.modal.open(this.modalContent, { size: 'lg', scrollable: true, centered: true, backdrop: 'static' });
  }

  addCourse(): void {
    this.modalData = null;
    this.modalRef = this.modal.open(this.modalContent, { size: 'lg', scrollable: true, centered: true, backdrop: 'static' });
  }

  confirm(data): void {
    this.coursesOpen = [
      ...this.coursesOpen,
      {
        courseId: this.coursesOpen.length + 1,
        coursePic: '',
        courseTitle: '',
        courseInfo: '',
        courseProgress: 0,
        courseStart: '',
        courseEnd: '',
        courseCategory: '',
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
            name: '',
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
    this.modalRef.close();
  }

  update(data): void {
    console.log(data);


  }
}
