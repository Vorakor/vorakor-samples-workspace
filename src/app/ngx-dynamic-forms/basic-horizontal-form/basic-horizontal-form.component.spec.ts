import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHorizontalFormComponent } from './basic-horizontal-form.component';

describe('BasicHorizontalFormComponent', () => {
  let component: BasicHorizontalFormComponent;
  let fixture: ComponentFixture<BasicHorizontalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicHorizontalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHorizontalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
