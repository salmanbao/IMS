import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributesMetaDataComponent } from './attributes-meta-data.component';

describe('AttributesMetaDataComponent', () => {
  let component: AttributesMetaDataComponent;
  let fixture: ComponentFixture<AttributesMetaDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributesMetaDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributesMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
