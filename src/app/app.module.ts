import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, } from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import {MaterialExampleModule} from '../material.module';
import { PatientregistryComponent } from './patientregistry/patientregistry.component';
import { PatientsummaryComponent } from './patientsummary/patientsummary.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SidenavComponent,
    CardsComponent,
    PatientregistryComponent,
    PatientsummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
