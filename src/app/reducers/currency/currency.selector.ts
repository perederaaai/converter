import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IExchangeRate} from "../../interface/interface";
import {currencyStateKey, ICurrencyState} from "./currency.reducer";

export const getCurrencyListState =
  createFeatureSelector<ICurrencyState>(currencyStateKey);

export const selectCurrencyList = createSelector(getCurrencyListState,
  (state: ICurrencyState): IExchangeRate[] => state.currencyList);

export const selectCurrencyListHeader = createSelector(getCurrencyListState,
  (state: ICurrencyState): IExchangeRate[] | null => state.headerRatesList);
