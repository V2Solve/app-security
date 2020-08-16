import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUserManagementComponent } from './basic-user-management.component';

describe('BasicUserManagementComponent', () => {
  let component: BasicUserManagementComponent;
  let fixture: ComponentFixture<BasicUserManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicUserManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
