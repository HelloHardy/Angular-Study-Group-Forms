import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideoutRegistrationFormComponent } from './hideout-registration-form.component';

describe('HideoutRegistrationFormComponent', () => {
  let component: HideoutRegistrationFormComponent;
  let fixture: ComponentFixture<HideoutRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideoutRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HideoutRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
