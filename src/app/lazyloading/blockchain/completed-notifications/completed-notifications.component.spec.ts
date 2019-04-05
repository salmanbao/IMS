import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedNotificationsComponent } from './completed-notifications.component';

describe('CompletedNotificationsComponent', () => {
  let component: CompletedNotificationsComponent;
  let fixture: ComponentFixture<CompletedNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
