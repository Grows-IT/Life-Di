import { Component, OnInit } from '@angular/core';
import { SystemReportService } from './system-report.service';

@Component({
  selector: 'app-system-report',
  templateUrl: './system-report.component.html',
  styleUrls: ['./system-report.component.scss']
})
export class SystemReportComponent implements OnInit {
  userData;
  courseData = [];
  courseLabels;
  numCourse;
  profitData = [];
  // tslint:disable-next-line: max-line-length
  profitLabel: Array<string> = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
  activityData = [];
  actLabels;
  numActivity;
  selectMonth1;
  selectMonth2;

  public barColors: Array<any> = [
    {
      backgroundColor: [
        '#3665c8',
        '#3665c8',
        '#3665c8',
        '#3665c8',
        '#3665c8',
        '#3665c8',
        '#3665c8',
        '#3665c8',
        '#3665c8',
        '#3665c8',
        '#3665c8',
        '#3665c8'
      ], borderColor: [
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff'
      ],
      borderWidth: 2,
    },
    {
      backgroundColor: [
        '#fbc658',
        '#fbc658',
        '#fbc658',
        '#fbc658',
        '#fbc658',
        '#fbc658',
        '#fbc658',
        '#fbc658',
        '#fbc658',
        '#fbc658',
        '#fbc658',
        '#fbc658'
      ], borderColor: [
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff'
      ],
      borderWidth: 2,
    },
  ];

  public barOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [
        {
          stacked: true
        }
      ]
    }
  };

  public chartDatasets: Array<any> = [
    { data: [217, 83], label: 'user' }
  ];
  public activityColors: Array<any> = [
    {
      backgroundColor: ['#ff4c5a', '#ff6d64', '#ffac79', '#c0de8f', '#77d8b5', '#bd9cd4'],
      borderWidth: 2,
    }
  ];
  public courseColors: Array<any> = [
    {
      backgroundColor: ['#f16745', '#ffc65d', '#7bc8a4', '#4cc3d9', '#576991', '#93648d'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    legend: { display: false }
  };

  constructor(private systemReport: SystemReportService) { }

  ngOnInit(): void {

    let d = new Date().getMonth();
    this.selectMonth1 = this.profitLabel[d];
    this.selectMonth2 = this.profitLabel[d];

    this.systemReport.getReport().subscribe(data => {
      console.log(data);
      this.userData = data.user;
      this.courseData = data.course;

      // course
      let topCourseRegisAll = 0;
      const course = data.course.topCourse.map(c => {
        topCourseRegisAll += c.registered;
        return c.registered;
      });
      this.courseLabels = data.course.topCourse.map(cou => cou.name);
      course.push(data.course.registeredUser - topCourseRegisAll);
      this.courseLabels.push('others');
      this.courseData = [{ data: course, label: 'Course' }];
      this.numCourse = data.course.activeCourse;

      // activity
      let topActRegisAll = 0;
      const act = data.activity.topActivity.map(a => {
        topActRegisAll += a.registered;
        return a.registered;
      });
      this.actLabels = data.activity.topActivity.map(ac => ac.name);
      act.push(data.activity.registeredUser - topActRegisAll);
      this.actLabels.push('others');
      this.activityData = [{ data: act, label: 'Activity' }];
      this.numActivity = data.activity.allActivity;

      // profit
      const data1 = data.profit.map(m => m.course);
      const data2 = data.profit.map(m => m.activity);
      this.profitData.push([{ data: data1, label: 'Course' }, { data: data2, label: 'Activity' }]);
    });
  }

  selMonth1(m) {
    this.selectMonth1 = m;
  }
  selMonth2(m) {
    this.selectMonth2 = m;
  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
