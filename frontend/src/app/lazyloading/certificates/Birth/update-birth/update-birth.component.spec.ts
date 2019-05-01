import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBirthComponent } from './update-birth.component';

describe('UpdateBirthComponent', () => {
  let component: UpdateBirthComponent;
  let fixture: ComponentFixture<UpdateBirthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBirthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
