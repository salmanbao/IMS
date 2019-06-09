import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatehomeComponent } from './certificatehome.component';

describe('CertificatehomeComponent', () => {
  let component: CertificatehomeComponent;
  let fixture: ComponentFixture<CertificatehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
