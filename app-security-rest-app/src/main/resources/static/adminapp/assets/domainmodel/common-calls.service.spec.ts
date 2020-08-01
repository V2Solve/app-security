import { TestBed } from '@angular/core/testing';

import { CommonCallsService } from './common-calls.service';

describe('CommonCallsService', () => {
  let service: CommonCallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonCallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
