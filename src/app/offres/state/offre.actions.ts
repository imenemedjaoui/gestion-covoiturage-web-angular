import { Action } from '@ngrx/store';
import { Offre } from '../offre.model';
import { Update } from '@ngrx/entity';
import { createAction } from '@ngrx/store';


export enum OffreActionTypes {
    LOAD_OFFRES = "[Offre] Load Offres",
    LOAD_OFFRES_SUCCESS = "[Offre] Load Offres Success",
    LOAD_OFFRES_FAIL = "[Offre] Load Offres Fail",

    LOAD_OFFRE = "[Offre] Load Offre",
    LOAD_OFFRE_SUCCESS = "[Offre] Load Offre Success",
    LOAD_OFFRE_FAIL = "[Offre] Load Offre Fail",

    CREATE_OFFRE = "[Offre] Create Offre",
    CREATE_OFFRE_SUCCESS = "[Offre] Create Offre Success",
    CREATE_OFFRE_FAIL = "[Offre] Create Offre Fail",
  
    UPDATE_OFFRE = "[Offre] Update Offre",
    UPDATE_OFFRE_SUCCESS = "[Offre] Update Offre Success",
    UPDATE_OFFRE_FAIL = "[Offre] Update Offre Fail",
  
    DELETE_OFFRE = "[Offre] Delete Offre",
    DELETE_OFFRE_SUCCESS = "[Offre] Delete Offre Success",
    DELETE_OFFRE_FAIL = "[Offre] Delete Offre Fail",

    SEARCH_BY = "[Offre] Search Offre",
    SEARCH_BY_SUCCESS = "[Offre] Search Offre Success",
    SEARCH_BY_FAIL = "[Offre] Search Offre Fail"
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

export class LoadOffre implements Action {
    readonly type = OffreActionTypes.LOAD_OFFRE;
    constructor(public payload: number) {}
  }
export class LoadOffreSuccess implements Action {
    readonly type = OffreActionTypes.LOAD_OFFRE_SUCCESS;
    constructor(public payload: Offre) {}
  }
export class LoadOffreFail implements Action {
    readonly type = OffreActionTypes.LOAD_OFFRE_FAIL;
    constructor(public payload: string) {}
  }
  
export class CreateOffre implements Action {
    readonly type = OffreActionTypes.CREATE_OFFRE;
    constructor(public payload: Offre) {}
  }
export class CreateOffreSuccess implements Action {
    readonly type = OffreActionTypes.CREATE_OFFRE_SUCCESS;
    constructor(public payload: Offre) {}
  } 
export class CreateOffreFail implements Action {
    readonly type = OffreActionTypes.CREATE_OFFRE_FAIL;
    constructor(public payload: string) {}
  }
  
export class UpdateOffre implements Action {
    readonly type = OffreActionTypes.UPDATE_OFFRE;
    constructor(public payload: Offre) {}
  }
export class UpdateOffreSuccess implements Action {
    readonly type = OffreActionTypes.UPDATE_OFFRE_SUCCESS;
    constructor(public payload: Update<Offre>) {}
  }
export class UpdateOffreFail implements Action {
    readonly type = OffreActionTypes.UPDATE_OFFRE_FAIL;
    constructor(public payload: string) {}
  }

export class DeleteOffre implements Action {
    readonly type = OffreActionTypes.DELETE_OFFRE;
    constructor(public payload: number) {}
  } 
export class DeleteOffreSuccess implements Action {
    readonly type = OffreActionTypes.DELETE_OFFRE_SUCCESS;
    constructor(public payload: number) {}
  }
export class DeleteOffreFail implements Action {
    readonly type = OffreActionTypes.DELETE_OFFRE_FAIL;
    constructor(public payload: string) {}
  }

export type Actions = LoadOffres | LoadOffresSuccess | LoadOffresFail 
                    | LoadOffre | LoadOffreSuccess | LoadOffreFail
                    | CreateOffre | CreateOffreSuccess | CreateOffreFail
                    | UpdateOffre | UpdateOffreSuccess | UpdateOffreFail
                    | DeleteOffre | DeleteOffreSuccess | DeleteOffreFail;