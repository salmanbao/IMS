import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNationalIdComponent } from './update-national-id.component';

describe('UpdateNationalIdComponent', () => {
  let component: UpdateNationalIdComponent;
  let fixture: ComponentFixture<UpdateNationalIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNationalIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNationalIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
