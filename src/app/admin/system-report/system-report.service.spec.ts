import { TestBed } from '@angular/core/testing';

import { SystemReportService } from './system-report.service';

describe('SystemReportService', () => {
  let service: SystemReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
