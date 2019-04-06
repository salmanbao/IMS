import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMemberCertificatesDialogComponent } from './add-member-certificates-dialog.component';

describe('AddMemberCertificatesDialogComponent', () => {
  let component: AddMemberCertificatesDialogComponent;
  let fixture: ComponentFixture<AddMemberCertificatesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMemberCertificatesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMemberCertificatesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
