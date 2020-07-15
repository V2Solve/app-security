import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMgmtComponent } from './application-mgmt.component';

describe('ApplicationMgmtComponent', () => {
  let component: ApplicationMgmtComponent;
  let fixture: ComponentFixture<ApplicationMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
