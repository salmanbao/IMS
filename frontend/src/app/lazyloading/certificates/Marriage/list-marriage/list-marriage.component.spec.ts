import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMarriageComponent } from './list-marriage.component';

describe('ListMarriageComponent', () => {
  let component: ListMarriageComponent;
  let fixture: ComponentFixture<ListMarriageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMarriageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMarriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
