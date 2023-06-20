import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Ordi {
  marque: string;
  nom: string;
  type: string;
  ecran: {
    taille: number;
    type: string;
    dpi: number;
  };
  clavier: {
    chiclet: boolean;
    retroeclairage: boolean;
    type: string;
    'pave-num': boolean;
  };
  system: {
    ram: number;
    cpu: {
      marque: string;
      nom: string;
      score: number;
      core: number;
      'frequence-max': number;
      tdp: number;
    };
    hdd: {
      capacite: number;
      type: string;
      rpm: number;
      'vitesse-transfert': number;
    };
    cg: {
      marque: string;
      modele: string;
      score: number;
    };
  };
  batterie: {
    capacite: number;
    autonomie: number;
  };
  prix: number;
  quantite?: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrdiService {
  private apiUrl = '../assets/pcs.json';

  constructor(private http: HttpClient) { }
  
  getOrdis(): Observable<Ordi[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    return this.http.get<Ordi[]>(this.apiUrl, { headers });
  }

  getOrdiById(id: number): Observable<Ordi> {
    return this.getOrdis().pipe(
      map(ordis => ordis[id])
    );
  }
}
