import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Portfolio } from '../models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfoliosService {

  constructor(private http: HttpClient) { }

  getPortfolios() {
    return this.http.get<any>('assets/data/portfolios.json')
        .toPromise()
        .then(res => res.data as Portfolio[])
        .then(data => data);
  }
}
