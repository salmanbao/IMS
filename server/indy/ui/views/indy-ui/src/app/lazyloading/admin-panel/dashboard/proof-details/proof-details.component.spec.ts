import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofDetailsComponent } from './proof-details.component';

describe('ProofDetailsComponent', () => {
  let component: ProofDetailsComponent;
  let fixture: ComponentFixture<ProofDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
