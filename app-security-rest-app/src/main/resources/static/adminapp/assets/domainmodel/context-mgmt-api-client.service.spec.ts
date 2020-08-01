import { TestBed } from '@angular/core/testing';

import { ContextMgmtApiClientService } from './context-mgmt-api-client.service';

describe('ContextMgmtApiClientService', () => {
  let service: ContextMgmtApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextMgmtApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
