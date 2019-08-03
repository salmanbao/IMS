import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCredentialDefinitionComponent } from './create-credential-definition.component';

describe('CreateCredentialDefinitionComponent', () => {
  let component: CreateCredentialDefinitionComponent;
  let fixture: ComponentFixture<CreateCredentialDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCredentialDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCredentialDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
