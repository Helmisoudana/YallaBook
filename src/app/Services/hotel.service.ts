import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  private  url = 'http://localhost:3000/';
  createHotel(hotel : any){
    return this.http.post(this.url +'hotel/',hotel)
  }
  getHotels(){
    return this.http.get(this.url +'hotels');
  }
  getHotelbyid(hotelId : number){
    return this.http.get(this.url +'hotels/'+hotelId);
  }
  deleteHotel(hotelId:any){
    return this.http.delete(this.url +'hotels/'+hotelId)
  }
  updateHotel(hotelId : number , hotel : any){
    return this.http.put(this.url +'hotels/'+hotelId , hotel)
  }

}
