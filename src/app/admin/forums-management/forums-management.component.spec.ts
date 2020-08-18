import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumsManagementComponent } from './forums-management.component';

describe('ForumsManagementComponent', () => {
  let component: ForumsManagementComponent;
  let fixture: ComponentFixture<ForumsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
