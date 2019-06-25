import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMarriageComponent } from './home-marriage.component';

describe('HomeMarriageComponent', () => {
  let component: HomeMarriageComponent;
  let fixture: ComponentFixture<HomeMarriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMarriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
