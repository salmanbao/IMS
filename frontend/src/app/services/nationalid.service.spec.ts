import { TestBed, inject } from '@angular/core/testing';

import { NationalidService } from './nationalid.service';

describe('NationalidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NationalidService]
    });
  });

  it('should be created', inject([NationalidService], (service: NationalidService) => {
    expect(service).toBeTruthy();
  }));
});
