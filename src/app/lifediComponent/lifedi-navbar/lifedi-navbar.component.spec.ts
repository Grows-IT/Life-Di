import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifediNavbarComponent } from './lifedi-navbar.component';

describe('LifediNavbarComponent', () => {
  let component: LifediNavbarComponent;
  let fixture: ComponentFixture<LifediNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifediNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifediNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
