import { TestBed } from '@angular/core/testing';

import { WebboardsService } from './webboards.service';

describe('WebboardsService', () => {
  let service: WebboardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebboardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
