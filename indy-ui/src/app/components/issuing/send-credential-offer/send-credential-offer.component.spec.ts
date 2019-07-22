import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCredentialOfferComponent } from './send-credential-offer.component';

describe('SendCredentialOfferComponent', () => {
  let component: SendCredentialOfferComponent;
  let fixture: ComponentFixture<SendCredentialOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCredentialOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCredentialOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
