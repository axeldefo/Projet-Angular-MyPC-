
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { PanierService } from '../panier-service.service';
import { OrdiService, Ordi } from '../ordi-service.service';
import { Router } from '@angular/router';
import { User } from '..//user.interface';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent {
  name!: string;
  email!: string;
  password!: string;
  registrationMessage!: string;
  loginMessage!: string;
  panier: Ordi[] = [];

   constructor(private router: Router, private ordiService: OrdiService, private authService: AuthService, private panierService: PanierService) {}

   register(): void {
    const user: User = {
      name: this.name,
      email: this.email,
      password: this.password
    };
  
    this.authService.registerUser(user)
      .subscribe(
        response => {
          if (response.success) {
            this.registrationMessage = response.message;
            this.router.navigate(['/panier'], { queryParams: { panier: JSON.stringify(this.panier) } });

          } else {
            this.registrationMessage = 'Registration failed: ' + response.message;
          }
        },
        error => {
          this.registrationMessage = 'Registration failed: ' + error.message;
        }
      );
  }
  
  login(): void {
    const credentials = {
      email: this.email,
      password: this.password
    };
  
    this.authService.loginUser(credentials)
      .subscribe(
        response => {
          if (response.success) {
            this.loginMessage = response.message;
            // cas de connexion réussie
            this.router.navigate(['/panier'], { queryParams: { panier: JSON.stringify(this.panier) } });
          } else {
            this.loginMessage = 'Login failed: ' + response.message;
            // 'échec de la connexion, par exemple, affichez un message d'erreur
          }
        },
        error => {
          this.loginMessage = 'Login failed: ' + error.message;
          // erreurs lors de la connexion
        }
      );
  }
}
