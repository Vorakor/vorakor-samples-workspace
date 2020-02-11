import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartbeatExampleComponent } from './heartbeat-example.component';

describe('HeartbeatExampleComponent', () => {
  let component: HeartbeatExampleComponent;
  let fixture: ComponentFixture<HeartbeatExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartbeatExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartbeatExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
