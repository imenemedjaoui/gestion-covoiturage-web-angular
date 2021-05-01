import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as offreActions from '../state/offre.actions';
@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css']
})
export class OffreListComponent implements OnInit {
  customers;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new offreActions.LoadOffres());
    this.store.subscribe(state => (this.customers = state.customers.customers));
  }

}
