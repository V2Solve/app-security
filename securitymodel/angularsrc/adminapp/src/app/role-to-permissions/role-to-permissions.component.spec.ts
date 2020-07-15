import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleToPermissionsComponent } from './role-to-permissions.component';

describe('RoleToPermissionsComponent', () => {
  let component: RoleToPermissionsComponent;
  let fixture: ComponentFixture<RoleToPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleToPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleToPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
