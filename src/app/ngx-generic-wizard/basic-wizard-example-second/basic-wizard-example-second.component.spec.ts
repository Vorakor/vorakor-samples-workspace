import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWizardExampleSecondComponent } from './basic-wizard-example-second.component';

describe('BasicWizardExampleSecondComponent', () => {
  let component: BasicWizardExampleSecondComponent;
  let fixture: ComponentFixture<BasicWizardExampleSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWizardExampleSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWizardExampleSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
