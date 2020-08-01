import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainTypeManagementComponent } from './domain-type-management.component';

describe('DomainTypeManagementComponent', () => {
  let component: DomainTypeManagementComponent;
  let fixture: ComponentFixture<DomainTypeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainTypeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainTypeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
