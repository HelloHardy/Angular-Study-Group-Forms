import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../services/city.service';
import { HideOutValidators } from '../validators/hideoutName-validators';

@Component({
  selector: 'app-hideout-registration-form',
  templateUrl: './hideout-registration-form.component.html',
  styleUrls: ['./hideout-registration-form.component.css']
})
export class HideoutRegistrationFormComponent implements OnInit {

  form: FormGroup;

  cities: any;

  constructor(private cityService: CityService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.cities = this.cityService.cities;

    // this.form = new FormGroup({
    //   heroes: new FormArray([]),
    //   city: new FormControl('', Validators.required),
    //   street: new FormControl('', Validators.required),
    //   isHidden: new FormControl(false, Validators.required),
    //   hideoutName: new FormControl(
    //     '',
    //     [Validators.required, Validators.minLength(3), HideOutValidators.cannotContainSpace],
    //     HideOutValidators.isHideoutNameTaken
    //   )
    // });

    this.form = this.formBuilder.group({
      city: ['', Validators.required],
      heroes: this.formBuilder.array([]),
      isHidden: [false, Validators.required],
      hideoutName: [
        '',
        [Validators.required, HideOutValidators.cannotContainSpace],
        HideOutValidators.isHideoutNameTaken
      ]
    });
  }

  get heroes(): FormArray {
    return this.form.get('heroes') as FormArray;
  }

  addHero(): void {

    const heroesControl = this.form.controls.heroes as FormArray;

    heroesControl.push(new FormControl('', Validators.required));

    // heroesControl.push(this.formBuilder.control('', Validators.required));
  }

  removeHero(index: number): void {
    const heroesControl = this.form.controls.heroes as FormArray;

    heroesControl.removeAt(index);
  }

  submitRegistration(): void {
    console.log(this.form);
  }
}
