import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWizardExampleFirstComponent } from './basic-wizard-example-first.component';

describe('BasicWizardExampleFirstComponent', () => {
  let component: BasicWizardExampleFirstComponent;
  let fixture: ComponentFixture<BasicWizardExampleFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWizardExampleFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWizardExampleFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
