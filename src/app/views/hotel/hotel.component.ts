import { Component, OnInit } from '@angular/core';
interface Room {
  id: number;
  name: string;
  description: string;
  features: string[];
  price: number;
  priceWithBreakfast: number;
  priceFullBoard: number;
  promotion: string | null;
  images: string[];
  maxAdults: number;
  maxChildren: number;
}

interface RoomSelection {
  roomId: number;
  quantity: number;
  adults: number;
  children: number;
  childrenAges: number[];
}

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html'
})

export class HotelComponent implements OnInit {
  hotel = {
    name: 'Mövenpick Resort & Marine Spa Sousse',
    description: "Bénéficiez d'un traitement VIP grâce au service exclusif de l'établissement Mövenpick Resort & Marine Spa Sousse",
    image: '../../../assets/img//1/movenpick3.jpg',
    mainImage: '../../../assets/img//1/Movenpick.jpg', // Image principale
    poolImage: '../../../assets/img//1/movenpick1.jpg', // Image piscine
    roomImage: '../../../assets/img//1/movenpick2.jpg', // Image chambre
    restaurantImage: '../../../assets/img//1/movenpick4.jpg', // Image restaurant
    location: 'Boulevard Du 14 Janvier Bp 114, 4039 Sousse, Tunisie',
    fullDescription: "Le Mövenpick Resort & Marine Spa Sousse est un complexe situé dans le centre-ville de Sousse. Il dispose d'un accès à une plage privée, de piscines d'eau salée extérieures, ainsi que d'un centre de bien-être et de sport. Chaque chambre est dotée de la climatisation, d'une télévision par satellite à écran plat et d'une salle de bains privative. Certaines comprennent des peignoirs et un plateau/bouilloire. Elles offrent toutes une vue panoramique sur la mer, le jardin ou la piscine. Les restaurants et les snack-bars du Mövenpick Resort & Marine Spa servent une cuisine internationale, y compris des plats méditerranéens et japonais ainsi que des grillades. Vous pourrez boire une sélection de boissons aux différents bars et cafés, notamment le bar de la piscine et l'Aga Café. Un petit-déjeuner buffet est préparé tous les jours. Ouverte 24h/24, la réception du Mövenpick Resort & Marine Spa propose un service de concierge. Vous trouverez une boutique sur place. Vous pourrez aussi pratiquer de nombreuses activités, telles que les sports nautiques, le volley-ball et le tennis de table. La connexion Wi-Fi est gratuite. Les couples apprécient particulièrement l'emplacement de cet établissement. Ils lui donnent la note de 8,7 pour un séjour à deux",
    features: [
      'Luxurious rooms with all necessary facilities',
      'On-site buffet restaurant with a variety of cuisines',
      'Indoor and outdoor swimming pools',
      'Entertainment programs for guests'
    ]
  };

  rooms: Room[] = [
    {
      id: 1,
      name: 'Chambre Double',
      description: 'Une chambre comfortable pour deux adultes',
      features: ['Air conditioning', 'TV', 'Mini-bar'],
      price: 150,
      priceWithBreakfast: 120,
      priceFullBoard: 150,
      promotion: '10% off for 3+ nights',
      images: ['../../../assets/img/1/2.jpg','../../../assets/img/1/2.jpg'],
      maxAdults: 2,
      maxChildren: 1
    },
    {
      id: 2,
      name: 'Chambre singulier',
      description: 'Chambre comfortable pour un adulte',
      features: ['Air conditioning', 'TV', 'Mini-bar', 'Sea view', 'Balcony'],
      price: 100,
      priceWithBreakfast: 100,
      priceFullBoard: 200,
      promotion: 'Free breakfast',
      images: ['../../../assets/img/1/1.jpg','../../../assets/img/1/2.jpg'],
      maxAdults: 2,
      maxChildren: 2
    },
    {
      id: 3,
      name: 'Suite de famille',
      description: 'une suite Large et spacieu pour une famille',
      features: ['Air conditioning', 'TV', 'Mini-bar', 'Separate living area', 'Kitchenette'],
      price: 250,
      priceWithBreakfast: 290,
      priceFullBoard: 350,
      promotion: null,
      images: ['../../../assets/img/1/3.jpg','../../../assets/img/1/2.jpg'],
      maxAdults: 4,
      maxChildren: 2
    }
  ];

  amenities = [
    { name: 'Piscine extérieure', icon: 'fas fa-swimming-pool' },
    { name: 'Connexion Wi-Fi gratuite', icon: 'fas fa-wifi' },
    { name: 'Parking gratuit', icon: 'fas fa-parking' },
    { name: 'Spa et centre de bien-être', icon: 'fas fa-spa' },
    { name: 'En bord de plage', icon: 'fas fa-umbrella-beach' },
    { name: 'Chambres familiales', icon: 'fas fa-bed' },
    { name: 'Plateau/bouilloire dans tous les hébergements', icon: 'fas fa-coffee' },
    { name: 'Bar', icon: 'fas fa-cocktail' },
    { name: 'Plage privée', icon: 'fas fa-sun' },
    { name: 'Bon petit-déjeuner', icon: 'fas fa-bacon' }
  ];
  

  checkInDate: string = '';
  checkOutDate: string = '';
  roomSelections: RoomSelection[] = [];
  
  additionalServices = {
    airportPickup: false,
    specialDecorations: false,
    mealUpgrade: 'none'
  };

  selectedRoomForPreview: Room | null = null;
  promoCode: string = '';

  ngOnInit() {
    this.initializeRoomSelections();
  }

  initializeRoomSelections() {
    this.roomSelections = this.rooms.map(room => ({
      roomId: room.id,
      quantity: 0,
      adults: 0,
      children: 0,
      childrenAges: []
    }));
  }

  updateRoomQuantity(roomId: number, quantity: number) {
    const selection = this.roomSelections.find(s => s.roomId === roomId);
    if (selection) {
      selection.quantity = quantity;
      this.updateGuestDetails(selection);
    }
  }

  updateGuestDetails(selection: RoomSelection) {
    const room = this.rooms.find(r => r.id === selection.roomId);
    if (room) {
      selection.adults = Math.min(selection.quantity * room.maxAdults, selection.adults);
      selection.children = Math.min(selection.quantity * room.maxChildren, selection.children);
      selection.childrenAges = selection.childrenAges.slice(0, selection.children);
    }
  }

  showRoomPreview(room: Room) {
    this.selectedRoomForPreview = room;
  }

  closeRoomPreview() {
    this.selectedRoomForPreview = null;
  }

  calculateTotalPrice(): number {
    let total = 0;
    for (const selection of this.roomSelections) {
      const room = this.rooms.find(r => r.id === selection.roomId);
      if (room && selection.quantity > 0) {
        let roomPrice = room.price;
        if (this.additionalServices.mealUpgrade === 'breakfast') {
          roomPrice = room.priceWithBreakfast;
        } else if (this.additionalServices.mealUpgrade === 'fullBoard') {
          roomPrice = room.priceFullBoard;
        }
        total += roomPrice * selection.quantity;
      }
    }
    if (this.additionalServices.airportPickup) total += 50;
    if (this.additionalServices.specialDecorations) total += 100;
    return total;
  }

  checkAvailability() {
    console.log('Checking availability for selected rooms and dates');
  }

  confirmReservation() {
    console.log('Reservation confirmed', {
      roomSelections: this.roomSelections,
      additionalServices: this.additionalServices,
      totalPrice: this.calculateTotalPrice()
    });
  }

  getRoomName(roomId: number): string {
    const room = this.rooms.find(r => r.id === roomId);
    return room ? room.name : 'Unknown Room';
  }

  getMealPlanName(): string {
    switch (this.additionalServices.mealUpgrade) {
      case 'breakfast':
        return 'With Breakfast';
      case 'fullBoard':
        return 'Full Board';
      default:
        return 'No Meal Plan';
    }
  }

  applyPromoCode() {
    console.log('Applying promo code:', this.promoCode);
    // Implement promo code logic here
  }

  isPopupOpen: boolean = false;

  reservation = {
    name: '',
    firstName: '',
    phone: '',
    email: '',
    paymentMethod: ''
  };

  togglePaymentMethod(method: string) {
    this.reservation.paymentMethod = method;
  }

  
}

