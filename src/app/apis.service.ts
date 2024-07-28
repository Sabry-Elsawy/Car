import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private _HttpClient:HttpClient) { }


  getData():Observable<any>
  {
    return  this._HttpClient.get('https://freetestapi.com/api/v1/cars?limit=5')
  }

  getAllCars():Observable<any>
  {
    return  this._HttpClient.get('https://freetestapi.com/api/v1/cars')
  }
  getDetailsCar(id:number):Observable<any>
  {
    return  this._HttpClient.get(`https://freetestapi.com/api/v1/cars/${id}`)
  }
 
}
