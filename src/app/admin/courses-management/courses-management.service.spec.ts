import { TestBed } from '@angular/core/testing';

import { CoursesManagementService } from './courses-management.service';

describe('CoursesManagementService', () => {
  let service: CoursesManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
