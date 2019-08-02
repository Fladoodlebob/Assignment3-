import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarrjComponent } from './marrj.component';

describe('MarrjComponent', () => {
  let component: MarrjComponent;
  let fixture: ComponentFixture<MarrjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarrjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
