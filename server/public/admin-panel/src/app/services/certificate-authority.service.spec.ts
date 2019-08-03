import { TestBed, inject } from '@angular/core/testing';

import { CertificateAuthorityService } from './certificate-authority.service';

describe('CertificateAuthorityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertificateAuthorityService]
    });
  });

  it('should be created', inject([CertificateAuthorityService], (service: CertificateAuthorityService) => {
    expect(service).toBeTruthy();
  }));
});
