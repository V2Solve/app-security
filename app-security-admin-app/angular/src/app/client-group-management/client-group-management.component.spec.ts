import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGroupManagementComponent } from './client-group-management.component';

describe('ClientGroupManagementComponent', () => {
  let component: ClientGroupManagementComponent;
  let fixture: ComponentFixture<ClientGroupManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientGroupManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGroupManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
