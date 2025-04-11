import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://localhost:3000/clients/';  // URL de l'API client backend

  constructor(private http: HttpClient) { }

  // Méthode pour créer un client
  createClient(client: any): Observable<any> {
    return this.http.post(this.url + 'client', client);
  }

  // Méthode pour obtenir tous les clients
  getClients(): Observable<any> {
    return this.http.get(this.url + 'client');
  }

  // Méthode pour obtenir un client par son ID
  getClientById(clientId: number): Observable<any> {
    return this.http.get(this.url + 'client' + clientId);
  }

  // Méthode pour mettre à jour un client
  updateClient(clientId: number, client: any): Observable<any> {
    return this.http.put(this.url + 'client'+ clientId, client);
  }

  // Méthode pour supprimer un client
  deleteClient(clientId: number): Observable<any> {
    return this.http.delete(this.url + 'client'+ clientId);
  }
}
