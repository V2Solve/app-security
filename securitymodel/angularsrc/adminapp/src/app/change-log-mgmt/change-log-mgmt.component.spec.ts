import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLogMgmtComponent } from './change-log-mgmt.component';

describe('ChangeLogMgmtComponent', () => {
  let component: ChangeLogMgmtComponent;
  let fixture: ComponentFixture<ChangeLogMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLogMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLogMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
