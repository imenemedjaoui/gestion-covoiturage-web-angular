import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Offre } from "./offre.model";

@Injectable({
  providedIn: "root"
})
export class OffreService {
  private offresUrl = "http://localhost:3000/offres";

  constructor(private http: HttpClient) {}

  getOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.offresUrl);
  }

  getOffreById(payload: number): Observable<Offre> {
    return this.http.get<Offre>(`${this.offresUrl}/${payload}`);
  }

  createOffre(payload: Offre): Observable<Offre> {
    return this.http.post<Offre>(this.offresUrl, payload);
  }

  updateOffre(offre: Offre): Observable<Offre> {
    return this.http.patch<Offre>(
      `${this.offresUrl}/${offre.id}`,
      offre
    );
  }

  deleteOffre(payload: number) {
    return this.http.delete(`${this.offresUrl}/${payload}`);
  }
}