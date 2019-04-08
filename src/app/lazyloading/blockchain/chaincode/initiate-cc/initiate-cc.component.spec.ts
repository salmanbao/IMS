import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateCCComponent } from './initiate-cc.component';

describe('InitiateCCComponent', () => {
  let component: InitiateCCComponent;
  let fixture: ComponentFixture<InitiateCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiateCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
