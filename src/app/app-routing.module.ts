import { JobOffersFormComponent } from './job-offers-form/job-offers-form.component';
import { JobOffersComponent } from "./job-offers/job-offers.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidateComponent } from "./candidate/candidate.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "candidate", component: CandidateComponent },
  { path: "joboffers", component: JobOffersComponent },
  { path: "newjob", component: JobOffersFormComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
