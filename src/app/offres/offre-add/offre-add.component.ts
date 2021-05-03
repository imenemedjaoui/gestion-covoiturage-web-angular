import { Component, OnInit } from '@angular/core';

import { Offre } from "../offre.model";
import * as fromOffre from "../state/offre.reducer";
import * as offreActions from "../state/offre.actions";

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-offre-add",
  templateUrl: "./offre-add.component.html",
  styleUrls: ["./offre-add.component.css"]
})

export class OffreAddComponent implements OnInit {
  offreForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromOffre.AppState>
  ) {}

  ngOnInit() {
    this.offreForm = this.fb.group({
      proposerpar: ["", Validators.required],
      villeDep: ["", Validators.required],
      villeArv: ["", Validators.required],
      date: ["", Validators.required]
    });
  }

  createOffre() {
    const newOffre: Offre = {
      proposerpar: this.offreForm.get("proposerpar").value,
      villeDep: this.offreForm.get("villeDep").value,
      villeArv: this.offreForm.get("villeArv").value,
      date: this.offreForm.get("date").value
    };

    this.store.dispatch(new offreActions.CreateOffre(newOffre));

    this.offreForm.reset();
  }
}
