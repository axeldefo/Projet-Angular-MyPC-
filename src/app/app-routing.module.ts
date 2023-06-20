import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdichoisitComponent } from './ordichoisit/ordichoisit.component';
import { OrdiComponent } from './ordi/ordi.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ordi', component: OrdiComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'ordi-choisit/:id', component: OrdichoisitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
