import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicResultsTableComponent } from './dynamic-results-table.component';

describe('DynamicResultsTableComponent', () => {
  let component: DynamicResultsTableComponent;
  let fixture: ComponentFixture<DynamicResultsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicResultsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
