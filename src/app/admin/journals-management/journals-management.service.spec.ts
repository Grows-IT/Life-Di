import { TestBed } from '@angular/core/testing';

import { JournalsManagementService } from './journals-management.service';

describe('JournalsManagementService', () => {
  let service: JournalsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
