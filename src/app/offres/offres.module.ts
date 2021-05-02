import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import {EffectsModule, Actions} from "@ngrx/effects";

import { StoreModule } from '@ngrx/store';
import { offreReducer } from './state/offre.reducer';
import { OffreEffect } from './state/offre.effects';

import { OffreComponent } from './offre/offre.component';
//import { OffreAddComponent } from './offre-add/offre-add.component';
import { OffreEditComponent } from './offre-edit/offre-edit.component';
import { OffreListComponent } from './offre-list/offre-list.component';
import { OffreSearchComponent } from './offre-search/offre-search.component';

const offreRoutes: Routes = [{ path: "", component: OffreComponent }];

@NgModule({
  declarations: [OffreComponent,  OffreEditComponent, OffreListComponent, OffreSearchComponent],
  imports: [RouterModule.forChild(offreRoutes),
    CommonModule,
    EffectsModule.forFeature([OffreEffect]),
    StoreModule.forFeature("offres",offreReducer)
  ]
})
export class OffresModule { }