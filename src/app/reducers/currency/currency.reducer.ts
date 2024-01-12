import {HttpErrorResponse} from '@angular/common/http';
import {createReducer, on} from '@ngrx/store';
import {CMockRates} from "../../../assets/mock-response";
import {IExchangeRate} from "../../interface/interface";
import {getCurrencyRate, getCurrencyRateFailed, getCurrencyRateSuccess} from "./currency.action";

export const currencyStateKey = 'currency';

export interface ICurrencyState {
  currencyList: IExchangeRate[],
  headerRatesList: IExchangeRate[] | null,
  error: HttpErrorResponse | null,
}

export const initialExchangeState: ICurrencyState = {
  currencyList: [],
  headerRatesList: null,
  error: null,
}

export const currencyReducer = createReducer(
  initialExchangeState,
  on(getCurrencyRate, (state) => {
    return ({
      ...state,
      currencyList: []
    })
  }),
  on(getCurrencyRateSuccess, (state, {currencyList}) => {
    return ({
      ...state,
      currencyList
    })
  }),
  on(getCurrencyRateFailed, (state, {error}) => {
    // bank API use CORS policy, so I have to use mock API in this case
    const headerCurrency: string[] = ['USD', 'EUR'];
    const headerRates: IExchangeRate[] = CMockRates.exchangeRate.filter(rates => headerCurrency.includes(rates.currency))
    return ({
      ...state,
      currencyList: CMockRates.exchangeRate,
      headerRatesList: headerRates,
      error
    })
  })
)
