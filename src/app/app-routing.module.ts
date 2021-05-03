import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { OffreAddComponent } from "./offres/offre-add/offre-add.component";
import { OffreSearchComponent } from "./offres/offre-search/offre-search.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "offres/add-offre", component: OffreAddComponent },
  { path: "offres/search-offre", component: OffreSearchComponent },
  {
    path: "offres",
    loadChildren: "../app/offres/offres.module#OffresModule"
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }