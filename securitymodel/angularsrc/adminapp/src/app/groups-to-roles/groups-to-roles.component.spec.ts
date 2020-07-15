import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsToRolesComponent } from './groups-to-roles.component';

describe('GroupsToRolesComponent', () => {
  let component: GroupsToRolesComponent;
  let fixture: ComponentFixture<GroupsToRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsToRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsToRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
