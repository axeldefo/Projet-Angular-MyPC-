import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { OrdiService, Ordi } from '../ordi-service.service';
import { PanierService } from '../panier-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;

  panier: Ordi[] = [];
  constructor(private ordiService: OrdiService, private router: Router, private panierService: PanierService) { }

  openConnexion() {
    
    this.router.navigate(['/connexion']);
  }

  openPanier() {
      this.router.navigate(['/panier'], { queryParams: { panier: JSON.stringify(this.panier) } });

  }
}
