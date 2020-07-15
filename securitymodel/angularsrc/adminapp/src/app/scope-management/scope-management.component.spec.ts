import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeManagementComponent } from './scope-management.component';

describe('ScopeManagementComponent', () => {
  let component: ScopeManagementComponent;
  let fixture: ComponentFixture<ScopeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
