import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepeersComponent } from './managepeers.component';

describe('ManagepeersComponent', () => {
  let component: ManagepeersComponent;
  let fixture: ComponentFixture<ManagepeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagepeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
