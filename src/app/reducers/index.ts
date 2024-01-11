import {ActionReducerMap} from '@ngrx/store';
import {currencyReducer, currencyStateKey, ICurrencyState} from "./currency/currency.reducer";

export interface State {
  [currencyStateKey]: ICurrencyState
}

export const reducers: ActionReducerMap<State> = {
  [currencyStateKey]: currencyReducer

};
