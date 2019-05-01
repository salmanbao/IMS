import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddccComponent } from './addcc.component';

describe('AddccComponent', () => {
  let component: AddccComponent;
  let fixture: ComponentFixture<AddccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
