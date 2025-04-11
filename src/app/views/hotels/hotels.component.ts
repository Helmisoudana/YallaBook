import { Component } from "@angular/core";
import { Router } from '@angular/router';
@Component({
    selector: 'app-hotels',
    templateUrl: 'hotels.component.html'
})
export class HotelsComponent {
    isPopupOpen = false;  // Contrôle si le pop-up est visible
    step = 1;  // Étape actuelle du quiz
    preferences = {
        reason: '',
        company: '',
        kids: '',
        rooms: '',
        arrivalDate: '',
        departureDate: '',
        location: ''
    };
    hotel = {
        id: 1,
        name: 'Hôtel Le Meilleur',
        location: 'Tunisia, Sousse',
        description: 'Un hôtel de luxe avec des vues magnifiques.',
        image: '../../../assets/img/hotels/1.jpg',
        amenities: [
            { icon: 'fas fa-wifi', label: 'Wi-Fi' },  // Wi-Fi
            { icon: 'fas fa-swimming-pool', label: 'Piscine' },  // Piscine
            { icon: 'fas fa-parking', label: 'Parking' },  // Parking
            { icon: 'fas fa-dumbbell', label: 'Centre de fitness' }  // Fitness Center
          ],
        stars: 4
      };
      
      hotels = Array.from({ length: 10 }, (_, i) => ({
        ...this.hotel,  // Copie les propriétés de l'hôtel initial
        id: i + 1,  // Assigne un id unique à chaque hôtel
        name: `Hôtel Le Meilleur ${i + 1}`,  // Change le nom pour chaque hôtel
        image: `../../../assets/img/hotels/${1+i}.jpg`,
      }));
      
    
    openPopup(): void {
        this.isPopupOpen = true; // Ouvre le pop-up
    }

    closePopup(): void {
        this.isPopupOpen = false; // Ferme le pop-up
    }

    nextStep(): void {
        if (this.step < 8) {
            this.step++; // Passe à l'étape suivante du quiz
        }
    }

    setAnswer(category: string, value: string): void {
        this.preferences[category] = value; // Sauvegarde la réponse sélectionnée
    }

    handleSubmit(): void {
        // Log l'objet preferences et ferme le pop-up
        console.log(this.preferences);
        this.closePopup();
    }
    getProgress() {
        return `${(this.step / 8) * 100}%`;
      }
      
    toggleOption(category: string, option: string): void {
        // Permet de basculer la sélection d'une option dans les catégories 'kids', 'company' ou 'relationship'
        if (this.preferences[category] === option) {
            this.preferences[category] = '';  // Annule la sélection si déjà choisie
        } else {
            this.preferences[category] = option; // Applique la nouvelle sélection
        }


    }
    constructor(private router: Router) {}
    goToHotel(hotelId: number) {
        // Redirection vers la page de détails de l'hôtel
        this.router.navigate(['/hotels', hotelId]);
      
}
slides: string[] = [
    'assets/img/hotels/r1.webp',
    'assets/img/hotels/r2.webp',
  ];
  currentSlideIndex: number = 0;

  ngOnInit(): void {
    this.autoChangeSlide();
  }

  autoChangeSlide(): void {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }, 10000); // Change slide every 10 seconds
  }
}

