import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBirthComponent } from './list-birth.component';

describe('ListBirthComponent', () => {
  let component: ListBirthComponent;
  let fixture: ComponentFixture<ListBirthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBirthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
