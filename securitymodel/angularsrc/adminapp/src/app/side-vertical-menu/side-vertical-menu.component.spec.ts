import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideVerticalMenuComponent } from './side-vertical-menu.component';

describe('SideVerticalMenuComponent', () => {
  let component: SideVerticalMenuComponent;
  let fixture: ComponentFixture<SideVerticalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideVerticalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideVerticalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
