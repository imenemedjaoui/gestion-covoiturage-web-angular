import { Injectable } from "@angular/core";

import { Actions, Effect, ofType, createEffect } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { ToastrService } from "ngx-toastr";
import { Observable, of } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";

import { OffreService } from "../offre.service";
import * as offreActions from "../state/offre.actions";
import { Offre } from "../offre.model";

@Injectable()
export class OffreEffect {
  displaySuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(offreActions.displaySuccess),
        tap(action => {
          this.toastr.success(action.description, action.title);
        })
      ),
    { dispatch: false }
  );

  displayWarning$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(offreActions.displayWarning),
        tap(action => {
          this.toastr.warning(action.description, action.title);
        })
      ),
    { dispatch: false }
  );

  displayError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(offreActions.displayError),
        tap(action => {
          this.toastr.error(action.description, action.title);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private offreService: OffreService,
    private toastr:ToastrService
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

  @Effect()
  loadOffre$: Observable<Action> = this.actions$.pipe(
    ofType<offreActions.LoadOffre>(
      offreActions.OffreActionTypes.LOAD_OFFRE
    ),
    mergeMap((action: offreActions.LoadOffre) =>
      this.offreService.getOffreById(action.payload).pipe(
        map(
          (offre: Offre) =>
            new offreActions.LoadOffreSuccess(offre)
        ),
        catchError(err => of(new offreActions.LoadOffreFail(err)))
      )
    )
  );

  @Effect()
  createOffre$: Observable<Action> = this.actions$.pipe(
    ofType<offreActions.CreateOffre>(
      offreActions.OffreActionTypes.CREATE_OFFRE
    ),
    map((action: offreActions.CreateOffre) => action.payload),
    mergeMap((offre: Offre) =>
      this.offreService.createOffre(offre).pipe(
        map(
          (newOffre: Offre) =>
            new offreActions.CreateOffreSuccess(newOffre)
        ),
        catchError(err => of(new offreActions.CreateOffreFail(err)))
      ).pipe(map(action =>
        offreActions.displaySuccess({
          title: "Succès d'ajout",
          description: "l'offre a bien été ajoutée"
        })
      ))
    )
  );

  @Effect()
  updateOffre$: Observable<Action> = this.actions$.pipe(
    ofType<offreActions.UpdateOffre>(
      offreActions.OffreActionTypes.UPDATE_OFFRE
    ),
    map((action: offreActions.UpdateOffre) => action.payload),
    mergeMap((offre: Offre) =>
      this.offreService.updateOffre(offre).pipe(
        map(
          (updateOffre: Offre) =>
            new offreActions.UpdateOffreSuccess({
              id: updateOffre.id,
              changes: updateOffre
            })
        ),
        catchError(err => of(new offreActions.UpdateOffreFail(err)))
      )
    )
  );

  @Effect()
  deleteOffre$: Observable<Action> = this.actions$.pipe(
    ofType<offreActions.DeleteOffre>(
      offreActions.OffreActionTypes.DELETE_OFFRE
    ),
    map((action: offreActions.DeleteOffre) => action.payload),
    mergeMap((id: number) =>
      this.offreService.deleteOffre(id).pipe(
        map(() => new offreActions.DeleteOffreSuccess(id)),
        catchError(err => of(new offreActions.DeleteOffreFail(err)))
      )
    )
  );
}