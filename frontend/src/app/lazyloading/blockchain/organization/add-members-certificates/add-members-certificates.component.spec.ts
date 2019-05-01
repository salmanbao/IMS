import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembersCertificatesComponent } from './add-members-certificates.component';

describe('AddMembersCertificatesComponent', () => {
  let component: AddMembersCertificatesComponent;
  let fixture: ComponentFixture<AddMembersCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMembersCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMembersCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
