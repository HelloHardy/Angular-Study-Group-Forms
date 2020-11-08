import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRegistrationFormComponent } from './hero-registration-form.component';

describe('HeroRegistrationFormComponent', () => {
  let component: HeroRegistrationFormComponent;
  let fixture: ComponentFixture<HeroRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
