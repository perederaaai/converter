import {ActionReducerMap} from '@ngrx/store';
import {currencyReducer, currencyStateKey, ICurrencyState} from "./currency/currency.reducer";

export interface IState {
  [currencyStateKey]: ICurrencyState
}

export const reducers: ActionReducerMap<IState> = {
  [currencyStateKey]: currencyReducer
};
