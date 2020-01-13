import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerWorkingsComponent } from './inner-workings.component';

describe('InnerWorkingsComponent', () => {
  let component: InnerWorkingsComponent;
  let fixture: ComponentFixture<InnerWorkingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerWorkingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerWorkingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
