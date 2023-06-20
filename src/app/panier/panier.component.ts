import { Component, OnInit } from '@angular/core';
import { Ordi } from '../ordi-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from '../panier-service.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: Ordi[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private panierService: PanierService) { }

  

  retirerDuPanier(ordi: Ordi): void {
    this.panierService.retirerDuPanier(ordi);
  }
  ngOnInit() {
    this.panier = this.panierService.getPanier();
  }
  

  diminuerQuantite(ordi: Ordi): void {
    if (ordi.quantite && ordi.quantite > 1) {
      ordi.quantite--;
    } else if (ordi.quantite === 1) {
      this.retirerDuPanier(ordi);
    }
  }
  
  
  augmenterQuantite(ordi: Ordi): void {
    if (ordi.quantite) {
      ordi.quantite++;
    } else {
      ordi.quantite = 1;
    }
  }

  calculerTotal(): number {
    let total = 0;
    for (const item of this.panier) {
      total += (item.prix ?? 0) * (item.quantite as number);
    }
    return total;
  }
  
  payer(): void {
    // Effectuer le traitement de paiement
  }
  
  retour(): void {
    this.router.navigate(['/home']);
  }
  
}
