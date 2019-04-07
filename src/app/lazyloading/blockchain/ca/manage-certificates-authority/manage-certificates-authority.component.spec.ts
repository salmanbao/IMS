import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCertificatesAuthorityComponent } from './manage-certificates-authority.component';

describe('ManageCertificatesAuthorityComponent', () => {
  let component: ManageCertificatesAuthorityComponent;
  let fixture: ComponentFixture<ManageCertificatesAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCertificatesAuthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCertificatesAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
