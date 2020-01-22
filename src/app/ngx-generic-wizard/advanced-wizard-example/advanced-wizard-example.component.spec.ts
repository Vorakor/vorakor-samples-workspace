import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedWizardExampleComponent } from './advanced-wizard-example.component';

describe('AdvancedWizardExampleComponent', () => {
  let component: AdvancedWizardExampleComponent;
  let fixture: ComponentFixture<AdvancedWizardExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedWizardExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedWizardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
