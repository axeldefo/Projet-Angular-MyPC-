import { Injectable } from '@angular/core';
import { Ordi } from './ordi-service.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private readonly PANIER_STORAGE_KEY = 'panier';

  private panier: Ordi[] = [];

  constructor() {
    const panierData = localStorage.getItem(this.PANIER_STORAGE_KEY);
    if (panierData) {
      this.panier = JSON.parse(panierData);
    }
  }

  ajouterAuPanier(ordi: Ordi): void {
    this.panier.push(ordi);
    this.sauvegarderPanier();
  }

  getPanier(): Ordi[] {
    return this.panier;
  }

  private sauvegarderPanier(): void {
    localStorage.setItem(this.PANIER_STORAGE_KEY, JSON.stringify(this.panier));
  }

  retirerDuPanier(ordi: Ordi): void {
    const index = this.panier.indexOf(ordi);
    if (index !== -1) {
      this.panier.splice(index, 1);
    }
  }
}

