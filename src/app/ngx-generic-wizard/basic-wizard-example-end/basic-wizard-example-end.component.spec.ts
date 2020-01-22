import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWizardExampleEndComponent } from './basic-wizard-example-end.component';

describe('BasicWizardExampleEndComponent', () => {
  let component: BasicWizardExampleEndComponent;
  let fixture: ComponentFixture<BasicWizardExampleEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWizardExampleEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWizardExampleEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
