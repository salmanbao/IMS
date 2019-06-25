import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeersComponent } from './list-peers.component';

describe('ListPeersComponent', () => {
  let component: ListPeersComponent;
  let fixture: ComponentFixture<ListPeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
