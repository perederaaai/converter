import {createReducer, on} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {CMockRates} from "../../../assets/mock-response";
import {ICurrencyPB, IExchangeRate} from "../../interface/interface";
import {getCurrencyRate, getCurrencyRateFailed, getCurrencyRateSuccess} from "./currency.action";

export const currencyStateKey = 'currency';

export interface ICurrencyState {
  currencyList: IExchangeRate[],
  error: HttpErrorResponse | null,
}

export const initialExchangeState: ICurrencyState = {
  currencyList: [],
  error: null
}

export const currencyReducer = createReducer(
  initialExchangeState,
  on(getCurrencyRate, (state) => {
    return ({
      ...state,
    })
  }),
  on(getCurrencyRateSuccess, (state, {currencyList}) => {
    return ({
      ...state,
      currencyList
    })
  }),
  on(getCurrencyRateFailed, (state, {error}) => {
    return ({
      ...state,
      currencyList: CMockRates.exchangeRate,
      error
    })
  })
)
