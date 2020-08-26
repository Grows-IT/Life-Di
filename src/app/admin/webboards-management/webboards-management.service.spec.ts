import { TestBed } from '@angular/core/testing';

import { WebboardsManagementService } from './webboards-management.service';

describe('WebboardsManagementService', () => {
  let service: WebboardsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebboardsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
