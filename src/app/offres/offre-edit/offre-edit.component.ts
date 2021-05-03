import { Component, OnInit } from '@angular/core';

import { Offre } from "../offre.model";
import * as fromOffre from "../state/offre.reducer";
import * as offreActions from "../state/offre.actions";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { DatePipe } from '@angular/common';
import { Observable } from "rxjs";

@Component({
  selector: 'app-offre-edit',
  templateUrl: './offre-edit.component.html',
  styleUrls: ['./offre-edit.component.css']
})

export class OffreEditComponent implements OnInit {
    offreForm: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      private store: Store<fromOffre.AppState>,
      public datepipe: DatePipe

    ) { }
  
    ngOnInit() {
      this.offreForm = this.fb.group({
        proposerpar: ["", Validators.required],
        villeDep: ["", Validators.required],
        villeArv: ["", Validators.required],
        date: ["", Validators.required],
        id: null
      })
  
      const offre$: Observable<Offre> = this.store.select(
        fromOffre.getCurrentOffre
      )
  
      offre$.subscribe(currentOffre => {
        if (currentOffre) {
          this.offreForm.patchValue({
            proposerpar: currentOffre.proposerpar,
            villeDep: currentOffre.villeDep,
            villeArv: currentOffre.villeArv,
            date:this.datepipe.transform(new Date(currentOffre.date), 'yyyy-MM-dd'),
            id: currentOffre.id
          });
        }
      })
    }
  
    updateOffre() {
      const updatedOffre: Offre = {
        proposerpar: this.offreForm.get("proposerpar").value,
        villeDep: this.offreForm.get("villeDep").value,
        villeArv: this.offreForm.get("villeArv").value,
        date: this.offreForm.get("date").value,
        id: this.offreForm.get("id").value
      };
  
      this.store.dispatch(new offreActions.UpdateOffre(updatedOffre))
    }
  
  }