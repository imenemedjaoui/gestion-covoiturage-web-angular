import * as offreActions from "./offre.actions";
import { Offre } from "../offre.model";
import * as fromRoot from "../../state/app-state";
import { createFeatureSelector, createSelector} from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface OffreState extends EntityState<Offre> {
    selectedOffreId: number | null,
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState{
    offres: OffreState;
}

export const offreAdapter: EntityAdapter<Offre> = createEntityAdapter<Offre>();

export const defaultOffre: OffreState = {
    ids: [],
    entities: {},
    selectedOffreId: null,
    loading: false,
    loaded: false,
    error:""
}


export const initialState = offreAdapter.getInitialState(defaultOffre);


export function offreReducer(state = initialState, action: offreActions.Actions): OffreState{
    switch(action.type){
        case offreActions.OffreActionTypes.LOAD_OFFRES: {
            return {
                ...state,
                loading: true};
        }
        case offreActions.OffreActionTypes.LOAD_OFFRES_SUCCESS: {
            return offreAdapter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true});
        }

        case offreActions.OffreActionTypes.LOAD_OFFRES_FAIL:{
            return {
                ...state,
                entities:{},
                loading:false,
                loaded: false,
                error: action.payload};
        }

        case offreActions.OffreActionTypes.LOAD_OFFRE_SUCCESS: {
            return offreAdapter.addOne(action.payload, {
                ...state,
                selectedOffreId: action.payload.id
            });
            }

        case offreActions.OffreActionTypes.LOAD_OFFRE_FAIL: {
            return {
                ...state,
                error: action.payload
            };
            }

        case offreActions.OffreActionTypes.CREATE_OFFRE_SUCCESS: {
            return offreAdapter.addOne(action.payload, state);
        }

        case offreActions.OffreActionTypes.CREATE_OFFRE_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        case offreActions.OffreActionTypes.UPDATE_OFFRE_SUCCESS: {
            return offreAdapter.updateOne(action.payload, state);
          }
          case offreActions.OffreActionTypes.UPDATE_OFFRE_FAIL: {
            return {
              ...state,
              error: action.payload
            };
          }

        case offreActions.OffreActionTypes.DELETE_OFFRE_SUCCESS: {
            return offreAdapter.removeOne(action.payload, state);
        }

        case offreActions.OffreActionTypes.DELETE_OFFRE_FAIL: {
            return {
                ...state,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

const getOffreFeatureState = createFeatureSelector<OffreState>(
    "offres"
)
export const getOffres = createSelector(
    getOffreFeatureState,
    offreAdapter.getSelectors().selectAll
  );
  
export const getOffresLoading = createSelector(
    getOffreFeatureState,
    (state: OffreState) => state.loading
  );
  
export const getOffresLoaded = createSelector(
    getOffreFeatureState,
    (state: OffreState) => state.loaded
  );
  
export const getError = createSelector(
    getOffreFeatureState,
    (state: OffreState) => state.error
  );
  
export const getCurrentOffreId = createSelector(
    getOffreFeatureState,
    (state: OffreState) => state.selectedOffreId
  );

export const getCurrentOffre = createSelector(
    getOffreFeatureState, getCurrentOffreId,
    state => state.entities[state.selectedOffreId]
  );