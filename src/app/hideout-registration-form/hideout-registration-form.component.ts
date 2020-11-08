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

  heroes: FormArray;

  city: FormControl;
  state: FormControl;
  street: FormControl;
  isHidden: FormControl;
  hideoutName: FormControl;

  cities: any;

  constructor(private cityService: CityService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      city: ['', Validators.required],
      heroes: this.formBuilder.array([]),
      street: ['', Validators.required],
      isHidden: ['', Validators.required],
      hideoutName: [
        '',
        [Validators.required, Validators.minLength(3), HideOutValidators.cannotContainSpace],
        HideOutValidators.isHideoutNameTaken
      ]
    });
  }

  ngOnInit(): void {
    this.cities = this.cityService.cities;

    // this.heroes = new FormArray([]);

    // this.city = new FormControl('', Validators.required);
    // this.street = new FormControl('', Validators.required);
    // this.isHidden = new FormControl('', Validators.required);
    // this.hideoutName = new FormControl(
    //   '',
    //   [Validators.required, Validators.minLength(3), HideOutValidators.cannotContainSpace],
    //   HideOutValidators.isHideoutNameTaken
    // );

    // this.form = new FormGroup({
    //   hero: this.heroes,
    //   city: this.city,
    //   street: this.street,
    //   isHidden: this.isHidden,
    //   hideoutName: this.hideoutName
    // });
  }

  getHeroes(): FormArray {
    return this.form.controls.heroes as FormArray;
  }

  addHero(): void {
    // this.heroes.push(new FormControl('', Validators.required));

    const heroesControl = this.getHeroes();

    heroesControl.push(this.formBuilder.control('', Validators.required));
  }

  removeHero(index): void {
    const heroesControl = this.getHeroes();

    heroesControl.removeAt(index);
  }

  submitRegistration(): void {
    console.log(this.form);
  }
}
