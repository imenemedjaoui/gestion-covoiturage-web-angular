import { Action } from '@ngrx/store';
import { Offre } from '../offre.model';

export enum OffreActionTypes {
    LOAD_OFFRES = "[Offre] Load Offres",
    LOAD_OFFRES_SUCCESS = "[Offre] Load Offres Success",
    LOAD_OFFRES_FAIL = "[Offre] Load Offres Fail"
}

export class LoadOffres implements Action {
    readonly type = OffreActionTypes.LOAD_OFFRES
}

export class LoadOffresSuccess implements Action {
    readonly type = OffreActionTypes.LOAD_OFFRES_SUCCESS
    constructor(public payload: Offre[]){}
}

export class LoadOffresFail implements Action {
    readonly type = OffreActionTypes.LOAD_OFFRES_FAIL
    constructor(public payload: string){}
}

export type Actions = LoadOffres | LoadOffresSuccess | LoadOffresFail;