import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import * as fromOffre from "../state/offre.reducer";

import { Store,select } from "@ngrx/store";
import { Offre } from "../offre.model";
import * as offreActions from '../state/offre.actions';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-offre-search',
  templateUrl: './offre-search.component.html',
  styleUrls: ['./offre-search.component.css']
})
export class OffreSearchComponent implements OnInit {
  searchForm: FormGroup;
  offres$: Observable<Offre[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromOffre.AppState>) { }

  ngOnInit() {
  this.store.dispatch(new offreActions.LoadOffres());
    this.offres$ = this.store.pipe(select(fromOffre.getOffres));
    this.error$ = this.store.pipe(select(fromOffre.getError));
}



searchBy(){
  const newOffre: Offre = {
    proposerpar: this.searchForm.get("proposerpar").value,
    villeDep: this.searchForm.get("villeDep").value,
    villeArv: this.searchForm.get("villeArv").value,
    date: this.searchForm.get("date").value
  };
  // traitement ici 
  this.store.dispatch(new offreActions.LoadOffres());
  this.offres$ = this.store.pipe(select(fromOffre.getOffres));
    this.error$ = this.store.pipe(select(fromOffre.getError));

  this.searchForm.reset();

}

deleteOffre(offre:  Offre) {
  if (confirm("Êtes-vous sûr de vouloir supprimer cette offre? ")) {
    this.store.dispatch(new offreActions.DeleteOffre(offre.id));
  }
}

editOffre(offre: Offre) {
  this.store.dispatch(new offreActions.LoadOffre(offre.id));
}
}
