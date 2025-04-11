import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url = 'http://localhost:3000/reservations/';  // URL de l'API des réservations

  constructor(private http: HttpClient) { }

  // Méthode pour créer une réservation
  createReservation(reservation: any): Observable<any> {
    return this.http.post(this.url+'reservation', reservation);
  }

  // Méthode pour obtenir toutes les réservations
  getAllReservations(){
    return this.http.get(this.url+'reservation');
  }

  // Méthode pour obtenir une réservation par son ID
  getReservationById(reservationId: number): Observable<any> {
    return this.http.get(this.url+'reservation' + reservationId);
  }

  // Méthode pour mettre à jour une réservation
  updateReservation(reservationId: number, reservation: any): Observable<any> {
    return this.http.put(this.url+'reservation' + reservationId, reservation);
  }

  // Méthode pour supprimer une réservation
  deleteReservation(reservationId: number): Observable<any> {
    return this.http.delete(this.url + reservationId);
  }

  // Méthode pour obtenir les réservations d'une chambre spécifique
  getReservationsByRoomId(roomId: number): Observable<any> {
    return this.http.get(this.url + 'rooms/' + roomId);
  }
}
