import {IExchangeRate} from "../../interface/interface";
import {ICurrencyState} from "./currency.reducer";

export const selectCurrencyList = (state: ICurrencyState): IExchangeRate[] => state.currencyList;
