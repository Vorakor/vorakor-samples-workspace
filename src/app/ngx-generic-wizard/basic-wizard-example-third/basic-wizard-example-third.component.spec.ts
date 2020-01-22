import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWizardExampleThirdComponent } from './basic-wizard-example-third.component';

describe('BasicWizardExampleThirdComponent', () => {
  let component: BasicWizardExampleThirdComponent;
  let fixture: ComponentFixture<BasicWizardExampleThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWizardExampleThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWizardExampleThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
