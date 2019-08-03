import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMarriageComponent } from './update-marriage.component';

describe('UpdateMarriageComponent', () => {
  let component: UpdateMarriageComponent;
  let fixture: ComponentFixture<UpdateMarriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMarriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
