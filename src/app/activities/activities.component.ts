import { Component, OnInit } from '@angular/core';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { ActivitiesService } from './activities.service';
import { AuthService } from '../auth/auth.service';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  user: SocialUser;
  // tslint:disable-next-line: member-ordering
  view: CalendarView = CalendarView.Month;

  // tslint:disable-next-line: member-ordering
  CalendarView = CalendarView;

  // tslint:disable-next-line: member-ordering
  viewDate: Date = new Date();

  // tslint:disable-next-line: member-ordering
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  // tslint:disable-next-line: member-ordering
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  // tslint:disable-next-line: member-ordering
  refresh: Subject<any> = new Subject();

  // CalendarEvent อาจจะต้อง custom ให้เข้ากับโปรเจค
  events: CalendarEvent[];

  activeDayIsOpen = true;

  constructor(private modal: NgbModal, private activitiesService: ActivitiesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.user = JSON.parse(user);
      }
    });

    this.activitiesService.getActivity(this.user).subscribe(e => {
      if (e) {
        const allEvent = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < e.length; i++) {
          console.log(e[i]);

          const event = e[i];
          event.start = new Date(event.start);
          event.end = new Date(event.end);
          // event.actions = this.actions;
          allEvent.push(event);
        }
        this.events = allEvent;
        console.log(this.events);
      }
    });
  }

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
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
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
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

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

}
