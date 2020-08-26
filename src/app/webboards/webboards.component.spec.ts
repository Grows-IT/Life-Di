import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebboardsComponent } from './webboards.component';

describe('WebboardsComponent', () => {
  let component: WebboardsComponent;
  let fixture: ComponentFixture<WebboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
