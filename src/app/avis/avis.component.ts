import { Component } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent {
  listeAvis = [
    {
      nom: 'John Doe',
      image: 'https://via.placeholder.com/70x70',
      commentaire: 'C\'était un super produit!',
      stars: [true, true, true, true, true]
    },
    {
      nom: 'Jane Smith',
      image: 'https://via.placeholder.com/70x70',
      commentaire: 'Je n\'ai pas aimé ce produit.',
      stars: [true, true, true, false, false]
    },
    {
      nom: 'Jane Smith',
      image: 'https://via.placeholder.com/70x70',
      commentaire: 'Je n\'ai pas aimé ce produit.',
      stars: [true, true, true, false, false]
    },
    {
      nom: 'Jane Smith',
      image: 'https://via.placeholder.com/70x70',
      commentaire: 'Je n\'ai pas aimé ce produit.',
      stars: [true, true, true, false, false]
    },
    {
      nom: 'Jane Smith',
      image: 'https://via.placeholder.com/70x70',
      commentaire: 'Je n\'ai pas aimé ce produit.',
      stars: [true, true, true, false, false]
    },
    {
      nom: 'Jane Smith',
      image: 'https://via.placeholder.com/70x70',
      commentaire: 'Je n\'ai pas aimé ce produit.',
      stars: [true, true, true, false, false]
    }
  ];
}
