import { TestBed } from '@angular/core/testing';

import { LifediNavbarService } from './lifedi-navbar.service';

describe('LifediNavbarService', () => {
  let service: LifediNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifediNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
