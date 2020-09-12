import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedAppOnboardingComponent } from './trusted-app-onboarding.component';

describe('TrustedAppOnboardingComponent', () => {
  let component: TrustedAppOnboardingComponent;
  let fixture: ComponentFixture<TrustedAppOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustedAppOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedAppOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
