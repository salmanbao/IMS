import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChaincodeComponent } from './list-chaincode.component';

describe('ListChaincodeComponent', () => {
  let component: ListChaincodeComponent;
  let fixture: ComponentFixture<ListChaincodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChaincodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChaincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
