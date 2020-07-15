import { TestBed } from '@angular/core/testing';

import { SecMgmtApiClientService } from './sec-mgmt-api-client.service';

describe('SecMgmtApiClientService', () => {
  let service: SecMgmtApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecMgmtApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
