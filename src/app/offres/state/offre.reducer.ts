import * as offreActions from "./offre.actions";
import { Offre } from "../offre.model";
import * as fromRoot from "../../state/app-state";

export interface OffreState {
    offres: Offre[],
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState{
    offres: OffreState
}

export const initialState: OffreState = {
    offres: [],
    loading: false,
    loaded:false,
    error:""
}

export function offreReducer(state = initialState, action: offreActions.Actions): OffreState{
    switch(action.type){
case offreActions.OffreActionTypes.LOAD_OFFRES: {
    return {
        ...state,
        loading: true};
}
case offreActions.OffreActionTypes.LOAD_OFFRES_SUCCESS: {
    return {
        ...state,
        loading: false,
        loaded: true,
        offres: action.payload};
}

case offreActions.OffreActionTypes.LOAD_OFFRES_FAIL:{
    return {
        ...state,
        offres:[],
        loading:false,
        loaded: false,
        error: action.payload};
}

default: {
    return state;
}
}
}