import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-registration-form',
  templateUrl: './hero-registration-form.component.html',
  styleUrls: ['./hero-registration-form.component.css']
})
export class HeroRegistrationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitRegistration(formValue: any): void {
    console.log(formValue);
  }

}
