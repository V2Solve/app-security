import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMenuVertComponent } from './table-menu-vert.component';

describe('TableMenuVertComponent', () => {
  let component: TableMenuVertComponent;
  let fixture: ComponentFixture<TableMenuVertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMenuVertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMenuVertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
