import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrgMembersComponent } from './list-org-members.component';

describe('ListOrgMembersComponent', () => {
  let component: ListOrgMembersComponent;
  let fixture: ComponentFixture<ListOrgMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrgMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrgMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
