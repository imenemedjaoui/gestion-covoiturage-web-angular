import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
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

 

  /*
  result:any;
  searchBy(input): Observable<Offre[]> {
    function specificFilter(c:Offre) {
      function containsVal(property) {
        return property.stringify().toLowerCase().indexOf(input.target.value.toLowerCase()) != -1;
      }
      return containsVal(c.villeDep) ||
      containsVal(c.villeArv) ||
      containsVal(c.date);
    }
    return this.http.get(this.offresUrl).pipe(map((res: Response) => <Offre[]> res.json().filter(specificFilter)));
    //return this.http.get(this.offresUrl).map(result => this.result = result);
    //return this.http.get(this.offresUrl).map((response: Response) => <Offre[]> response.json().filter(specificFilter));
    }*/

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