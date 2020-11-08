import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroRegistrationFormComponent } from './hero-registration-form/hero-registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HideoutRegistrationFormComponent } from './hideout-registration-form/hideout-registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroRegistrationFormComponent,
    HideoutRegistrationFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
