import { Component, OnInit } from '@angular/core';
import { OrdiService, Ordi } from '../ordi-service.service';
import { Router } from '@angular/router';
import { PanierService } from '../panier-service.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-ordi',
  templateUrl: './ordi.component.html',
  styleUrls: ['./ordi.component.css']
})
export class OrdiComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  ordinateurs: Ordi[] = [];
  panier: Ordi[] = [];
  constructor(private ordiService: OrdiService, private router: Router, private panierService: PanierService) { }

  ngOnInit() {
    this.getOrdis();
  }

  getOrdis(): void {
    this.ordiService.getOrdis().subscribe(ordis => {
      this.ordinateurs = ordis;
      this.handleNullEcranProperties();
    });
  }

  voirDetails(ordi: Ordi): void {
    const id = this.ordinateurs.indexOf(ordi);
    this.router.navigateByUrl(`/ordi-choisit/${id}`);
  }

  handleNullEcranProperties(): void {
    this.ordinateurs = this.ordinateurs.map(ordi => {
      if (ordi.ecran === null) {
        // Attribuer une valeur par défaut à `ecran` ou ignorer l'élément
        return {
          ...ordi,
          ecran: {
            taille: 0, // Valeur par défaut pour la taille de l'écran
            type: '', // Valeur par défaut pour le type de l'écran
            dpi: 0 // Valeur par défaut pour le DPI de l'écran
          }
        };
      }
      return ordi;
    });
  }

  ajouterAuPanier(ordi: Ordi): void {
    const ordiAvecQuantite: Ordi = { ...ordi, quantite: 1 };
    this.panierService.ajouterAuPanier(ordiAvecQuantite);
  }

 
   
}
