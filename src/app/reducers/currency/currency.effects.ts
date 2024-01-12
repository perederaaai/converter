import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {CurrencyService} from "../../service/currency.service";
import {getCurrencyRate, getCurrencyRateFailed, getCurrencyRateSuccess} from "./currency.action";

@Injectable()
export class currencyEffects {
  private actions$: Actions = inject(Actions);
  private currencyService: CurrencyService = inject(CurrencyService);

  getCurrency$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrencyRate),
      switchMap((action) =>
        this.currencyService.getCurrencyData(action.date).pipe(
          map((response) => {
            return getCurrencyRateSuccess({currencyList: response.exchangeRate})
          }),
          catchError((error) => {
            return of(getCurrencyRateFailed({error}))
          })
        ))
    )
  );


}
