import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Btc } from '../interfaces/btc.interface';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})
export class QuantumService {

  constructor(private _http: HttpClient) { }

  public getData(): Observable<Btc> {
    return this._http.get<Btc>(API.mocky.get);
  }

  public getDataFetch(): Promise<Array<Btc>> {
    return fetch(API.mocky.get).then(res => res.json());
  }
}
