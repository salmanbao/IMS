import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnationalidComponent } from './listnationalid.component';

describe('ListnationalidComponent', () => {
  let component: ListnationalidComponent;
  let fixture: ComponentFixture<ListnationalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListnationalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnationalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
