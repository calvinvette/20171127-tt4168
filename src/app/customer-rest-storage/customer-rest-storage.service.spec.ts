import { TestBed, inject } from '@angular/core/testing';

import { CustomerRESTStorageService } from './customer-rest-storage.service';

describe('CustomerRESTStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerRESTStorageService]
    });
  });

  it('should ...', inject([CustomerRESTStorageService], (service: CustomerRESTStorageService) => {
    expect(service).toBeTruthy();
  }));
});
