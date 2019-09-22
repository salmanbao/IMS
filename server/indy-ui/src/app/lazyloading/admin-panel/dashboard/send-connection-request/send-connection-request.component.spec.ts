import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendConnectionRequestComponent } from './send-connection-request.component';

describe('SendConnectionRequestComponent', () => {
  let component: SendConnectionRequestComponent;
  let fixture: ComponentFixture<SendConnectionRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendConnectionRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendConnectionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
