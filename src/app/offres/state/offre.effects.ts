import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { OffreService } from "../offre.service";
import * as offreActions from "../state/offre.actions";
import { Offre } from "../offre.model";

@Injectable()
export class OffreEffect {
  constructor(
    private actions$: Actions,
    private offreService: OffreService
  ) {}

  @Effect()
  loadOffres$: Observable<Action> = this.actions$.pipe(
    ofType<offreActions.LoadOffres>(
      offreActions.OffreActionTypes.LOAD_OFFRES
    ),
    mergeMap((action: offreActions.LoadOffres) =>
      this.offreService.getOffres().pipe(
        map(
          (offres: Offre[]) =>
            new offreActions.LoadOffresSuccess(offres)
        ),
        catchError(err => of(new offreActions.LoadOffresFail(err)))
      )
    )
  ); 
}