import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebboardsManagementComponent } from './webboards-management.component';

describe('WebboardsManagementComponent', () => {
  let component: WebboardsManagementComponent;
  let fixture: ComponentFixture<WebboardsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebboardsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebboardsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
