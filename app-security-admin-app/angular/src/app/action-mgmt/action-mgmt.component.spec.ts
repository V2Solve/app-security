import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMgmtComponent } from './action-mgmt.component';

describe('ActionMgmtComponent', () => {
  let component: ActionMgmtComponent;
  let fixture: ComponentFixture<ActionMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
