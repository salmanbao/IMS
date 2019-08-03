import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalidComponent } from './nationalid.component';

describe('NationalidComponent', () => {
  let component: NationalidComponent;
  let fixture: ComponentFixture<NationalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
