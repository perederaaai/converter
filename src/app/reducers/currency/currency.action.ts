import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";
import {ICurrencyPB, IExchangeRate} from "../../interface/interface";

export const GET_CURRENCY_RATE = '[MAIN_LAYOUT]  get currency rate ';
export const GET_CURRENCY_RATE_SUCCESS = '[MAIN_LAYOUT] get currency rate success ';
export const GET_CURRENCY_RATE_FAILED = '[MAIN_LAYOUT] get currency rate failed ';

export const getCurrencyRate = createAction(
  GET_CURRENCY_RATE,
  props<{
    date: string;
  }>()
);
export const getCurrencyRateSuccess = createAction(
  GET_CURRENCY_RATE_SUCCESS,
  props<{
    currencyList: IExchangeRate[];
  }>()
);
export const getCurrencyRateFailed = createAction(
  GET_CURRENCY_RATE_FAILED,
  props<{
    error: HttpErrorResponse;
  }>()
);
