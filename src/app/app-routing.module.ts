import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PatientregistryComponent } from './patientregistry/patientregistry.component';
import { PatientsummaryComponent } from './patientsummary/patientsummary.component';

const routes: Routes = [
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'patientregistry', component: PatientregistryComponent },
  { path: 'patientsummary', component: PatientsummaryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
