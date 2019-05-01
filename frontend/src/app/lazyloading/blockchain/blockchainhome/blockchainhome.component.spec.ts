import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainhomeComponent } from './blockchainhome.component';

describe('BlockchainhomeComponent', () => {
  let component: BlockchainhomeComponent;
  let fixture: ComponentFixture<BlockchainhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
