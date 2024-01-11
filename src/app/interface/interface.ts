export interface ICurrencyPB{
  date: string;
  bank: string;
  baseCurrency: number;
  baseCurrencyLit: string;
  exchangeRate: IExchangeRate[];
}

export interface IExchangeRate {
    baseCurrency : string;
    currency: string;
    saleRateNB: number;
    purchaseRateNB: number;
    saleRate?: number;
    purchaseRate?: number;
}
