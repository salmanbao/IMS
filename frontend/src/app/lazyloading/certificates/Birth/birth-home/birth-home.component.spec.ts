import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthHomeComponent } from './birth-home.component';

describe('BirthHomeComponent', () => {
  let component: BirthHomeComponent;
  let fixture: ComponentFixture<BirthHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
