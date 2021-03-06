import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivitiesService } from 'src/app/activities/activities.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarView, CalendarEventTimesChangedEvent, CalendarEventAction } from 'angular-calendar';
import { SocialUser } from 'angularx-social-login';
import { startOfDay, endOfDay, isSameMonth, isSameDay } from 'date-fns';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activity-schedule',
  templateUrl: './activity-schedule.component.html',
  styleUrls: ['./activity-schedule.component.scss']
})
export class ActivityScheduleComponent implements OnInit {
  @ViewChild('modalAddEvent', { static: true }) modalAddEvent: TemplateRef<any>;
  @ViewChild('modalDetail', { static: true }) modalDetail: TemplateRef<any>;
  user: SocialUser;
  isIncoming: boolean;
  activityForm: FormGroup;
  modalRef;
  // CalendarEvent อาจจะต้อง custom ให้เข้ากับโปรเจค
  incomingActivity: any[];
  passedActivity: any[];

  // tslint:disable-next-line: member-ordering
  view: CalendarView = CalendarView.Month;

  // tslint:disable-next-line: member-ordering
  CalendarView = CalendarView;

  // tslint:disable-next-line: member-ordering
  viewDate: Date = new Date();

  // tslint:disable-next-line: member-ordering
  modalData: {
    event: CalendarEvent;
  };

  // tslint:disable-next-line: member-ordering
  refresh: Subject<any> = new Subject();

  // CalendarEvent อาจจะต้อง custom ให้เข้ากับโปรเจค
  // tslint:disable-next-line: member-ordering
  events: CalendarEvent[];

  activeDayIsOpen = true;

  // tslint:disable-next-line: max-line-length
  constructor(private modal: NgbModal, private activitiesService: ActivitiesService, private authService: AuthService, private formBuilder: FormBuilder) {
    this.activityForm = this.formBuilder.group({
      activityTitle: ['', Validators.required],
      activityStart: ['', Validators.required],
      activityEnd: ['', Validators.required],
      registerStart: ['', Validators.required],
      registerEnd: ['', Validators.required],
      activityDetail: ['', Validators.required],
      activityPrice: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.isIncoming = true;

    this.authService.getUser().subscribe(user => {
      if (user) {
        this.user = JSON.parse(user);
      }
    });

    this.activitiesService.getActivity(this.user).subscribe(e => {
      if (e) {
        const passedActivity = [];
        const incomingActivity = [];

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < e.length; i++) {
          console.log(e[i]);

          const event = e[i];
          event.start = new Date(event.start);
          event.end = new Date(event.end);
          event.preStart = new Date(event.preStart);
          event.preEnd = new Date(event.preEnd);
          console.log(event.start.getTime());
          if (event.end.getTime() > new Date().getTime()) {
            console.log('a');

            incomingActivity.push(event);
          } else {
            console.log('b');

            passedActivity.push(event);
          }
          // event.actions = this.actions;
          // allEvent.push(event);
        }
        this.incomingActivity = incomingActivity;
        this.passedActivity = passedActivity;
        // this.events = allEvent;
        // console.log(this.events);

      }
    });
  }

  // tslint:disable-next-line: member-ordering
  incomingActivityActions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.incomingActivity = this.incomingActivity.filter((iEvent) => iEvent !== event);
        // this.handleEvent('Deleted', event);
      },
    },
  ];

  // tslint:disable-next-line: member-ordering
  passedActivityActions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.passedActivity = this.passedActivity.filter((iEvent) => iEvent !== event);
        // this.handleEvent('Deleted', event);
      },
    },
  ];
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({ event, newStart, newEnd, }: CalendarEventTimesChangedEvent): void {
    this.incomingActivity = this.incomingActivity.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleDetail(event);
  }

  handleDetail(event: CalendarEvent): void {
    this.modalData = { event };
    this.modal.open(this.modalDetail, { size: 'lg', scrollable: true, centered: true, backdrop: 'static' });
  }

  addEvent(): void {
    // this.activityForm.reset();
    this.modalData = null;
    this.modalRef = this.modal.open(this.modalAddEvent, { size: 'lg', scrollable: true, centered: true, backdrop: 'static' });
    // this.incomingActivity = [
    //   ...this.incomingActivity,
    //   {
    //     title: '',
    //     start: startOfDay(new Date()),
    //     end: endOfDay(new Date()),
    //     color: {
    //       primary: '#001400',
    //       secondary: '#FDF1BA',
    //     },
    //     draggable: false,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true,
    //     },
    //   },
    // ];
  }

  // deleteIncomingEvent(eventToDelete: CalendarEvent) {
  //   this.incomingActivity = this.incomingActivity.filter((event) => event !== eventToDelete);
  // }

  // deletePassedEvent(eventToDelete: CalendarEvent) {
  //   this.passedActivity = this.passedActivity.filter((event) => event !== eventToDelete);
  // }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  getStatus(e) {
    const end = new Date(e).getTime();
    const now = new Date().getTime();

    if (now > end) {
      return 'หมดเวลาการสมัคร';
    } else {
      return 'สามารถลงทะเบียนได้';
    }
  }

  incoming() {
    this.isIncoming = true;
  }

  passed() {
    this.isIncoming = false;
  }

  confirm(val) {
    this.incomingActivity = [
      ...this.incomingActivity,
      {
        title: val.activityTitle,
        start: val.activityStart,
        end: val.activityEnd,
        preStart: val.activityStart,
        preEnd: val.activityEnd,
        price: val.activityPrice,
        detail: val.activityDetail,
        color: {
          primary: '#001400',
          secondary: '#FDF1BA',
        },
        draggable: false,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
    this.modalRef.close();
  }

}
