import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalsManagementComponent } from './journals-management.component';

describe('JournalsManagementComponent', () => {
  let component: JournalsManagementComponent;
  let fixture: ComponentFixture<JournalsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
