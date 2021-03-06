import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { DatePipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { offreReducer } from './state/offre.reducer';
import { OffreEffect } from './state/offre.effects';

import { OffreComponent } from './offre/offre.component';
import { OffreEditComponent } from './offre-edit/offre-edit.component';
import { OffreListComponent } from './offre-list/offre-list.component';


const offreRoutes: Routes = [{ path: "", component: OffreComponent }];

@NgModule({
  declarations: [OffreComponent,  OffreEditComponent, OffreListComponent],
  imports: [RouterModule.forChild(offreRoutes),
    CommonModule,ReactiveFormsModule, FormsModule,
    EffectsModule.forFeature([OffreEffect]),
    StoreModule.forFeature("offres",offreReducer)
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class OffresModule { }