import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallChaincodeComponent } from './install-chaincode.component';

describe('InstallChaincodeComponent', () => {
  let component: InstallChaincodeComponent;
  let fixture: ComponentFixture<InstallChaincodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallChaincodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallChaincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
