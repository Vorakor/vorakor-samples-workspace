import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSocketExampleComponent } from './web-socket-example.component';

describe('WebSocketExampleComponent', () => {
  let component: WebSocketExampleComponent;
  let fixture: ComponentFixture<WebSocketExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebSocketExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebSocketExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
