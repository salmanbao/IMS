import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalIdHomeComponent } from './national-id-home.component';

describe('NationalIdHomeComponent', () => {
  let component: NationalIdHomeComponent;
  let fixture: ComponentFixture<NationalIdHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalIdHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalIdHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
