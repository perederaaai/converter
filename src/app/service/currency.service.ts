import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ICurrencyPB} from "../interface/interface";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private http: HttpClient = inject(HttpClient);
  private apiUrl: string = environment.apiUrl;

  getCurrencyData(date: string): Observable<ICurrencyPB> {
    const params = {
      'json&date': date
    };
    return this.http.get<ICurrencyPB>(this.apiUrl + '/p24api/exchange_rates', {params});
  }


}
