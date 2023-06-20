import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordi, OrdiService } from '../ordi-service.service';
import { PanierService } from '../panier-service.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-ordichoisit',
  templateUrl: './ordichoisit.component.html',
  styleUrls: ['./ordichoisit.component.css']
})
export class OrdichoisitComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  
  ordi!: Ordi;

  selectedStockage: number = 0;
  selectedRam: number = 0;
  selectedProcesseur: number = 0;
  selectedEcran: number = 0;
  selectedSE: string = '';

  prix!: number;

  stockageOptions: number[] = [500, 1000, 2000];
  ramOptions: number[] = [4, 8, 16];
  processeurOptions: number[] = [2.4, 3.0, 3.6];
  ecranOptions: string[] = ['14', '26', '28'];
  seOptions: string[] = ['Windows', 'Linux', 'Fedora'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordiService: OrdiService,
    private panierService: PanierService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ordiService.getOrdiById(Number(id)).subscribe((ordi: Ordi) => {
        const updatedOrdi = this.handleNullEcranProperties(ordi);
        this.ordi = updatedOrdi;
        this.updatePrix();
        console.log(updatedOrdi.marque);
        console.log(updatedOrdi.nom);
        console.log(updatedOrdi.ecran.dpi);

      }
 ) }
}
  goBack(): void {
    this.router.navigate(['/home']);
  }

  panier(): void {
    this.router.navigate(['/panier'], { queryParams: { panier: JSON.stringify(this.panier) } });
  }

  updatePrix(): void {
    this.prix = this.ordi.prix + (this.selectedStockage + this.selectedRam + this.selectedProcesseur) * 50;
  }

  ajouterAuPanier(): void {
    const ordiAvecQuantite: Ordi = { ...this.ordi, quantite: 1 };
    this.panierService.ajouterAuPanier(ordiAvecQuantite);
  }
  

  handleNullEcranProperties(ordi: Ordi): Ordi {
    if (!ordi.ecran) {
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
  }
}
