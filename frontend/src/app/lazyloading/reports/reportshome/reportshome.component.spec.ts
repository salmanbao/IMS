import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportshomeComponent } from './reportshome.component';

describe('ReportshomeComponent', () => {
  let component: ReportshomeComponent;
  let fixture: ComponentFixture<ReportshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
