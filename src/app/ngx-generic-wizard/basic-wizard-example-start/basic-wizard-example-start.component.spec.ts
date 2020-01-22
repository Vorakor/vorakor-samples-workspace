import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicWizardExampleStartComponent } from './basic-wizard-example-start.component';

describe('BasicWizardExampleStartComponent', () => {
  let component: BasicWizardExampleStartComponent;
  let fixture: ComponentFixture<BasicWizardExampleStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicWizardExampleStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicWizardExampleStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
