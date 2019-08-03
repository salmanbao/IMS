import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarriageComponent } from './add-marriage.component';

describe('AddMarriageComponent', () => {
  let component: AddMarriageComponent;
  let fixture: ComponentFixture<AddMarriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
