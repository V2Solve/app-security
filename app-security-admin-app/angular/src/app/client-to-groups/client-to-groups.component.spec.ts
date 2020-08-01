import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientToGroupsComponent } from './client-to-groups.component';

describe('ClientToGroupsComponent', () => {
  let component: ClientToGroupsComponent;
  let fixture: ComponentFixture<ClientToGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientToGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientToGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
