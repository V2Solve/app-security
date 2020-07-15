import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeTypeManagementComponent } from './scope-type-management.component';

describe('ScopeTypeManagementComponent', () => {
  let component: ScopeTypeManagementComponent;
  let fixture: ComponentFixture<ScopeTypeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopeTypeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeTypeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
