import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMembersCertificatesComponent } from './manage-members-certificates.component';

describe('ManageMembersCertificatesComponent', () => {
  let component: ManageMembersCertificatesComponent;
  let fixture: ComponentFixture<ManageMembersCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMembersCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMembersCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
