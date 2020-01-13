import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVerticalFormComponent } from './basic-vertical-form.component';

describe('BasicVerticalFormComponent', () => {
  let component: BasicVerticalFormComponent;
  let fixture: ComponentFixture<BasicVerticalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicVerticalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicVerticalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
