import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable} from "rxjs";

import * as offreActions from '../state/offre.actions';
import * as fromOffre from '../state/offre.reducer';
import { Offre } from '../offre.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css']
})
export class OffreListComponent implements OnInit {
  offres$: Observable<Offre[]>;
  error$:Observable<String>;
  villedp:any;
  villearr:any;
  date:any;
  constructor(private store: Store<fromOffre.AppState>,
    public datepipe: DatePipe) { }

  ngOnInit() {
    this.store.dispatch(new offreActions.LoadOffres());
    this.offres$ = this.store.pipe(select(fromOffre.getOffres));
    this.error$ = this.store.pipe(select(fromOffre.getError));
    this.villedp= '';
    this.villearr='';
    this.date='';
  }

  deleteOffre(offre: Offre) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette offre?")) {
      this.store.dispatch(new offreActions.DeleteOffre(offre.id));
    }
  }

  editOffre(offre: Offre) {
    this.store.dispatch(new offreActions.LoadOffre(offre.id));
  }
}