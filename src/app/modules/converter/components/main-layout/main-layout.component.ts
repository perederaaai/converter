import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {IExchangeRate} from "../../../../interface/interface";
import {IState} from "../../../../reducers";
import {getCurrencyRate} from "../../../../reducers/currency/currency.action";
import {selectCurrencyListHeader} from "../../../../reducers/currency/currency.selector";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  public currencyHeaderList$: Observable<IExchangeRate[] | null>;
  private store$: Store<IState> = inject(Store<IState>);

  ngOnInit(): void {
    this.getInitialData();
  }

  getInitialData(): void {
    const date: string = this.convertDate(new Date());
    this.store$.dispatch(getCurrencyRate({date}));
    this.currencyHeaderList$ = this.store$.select(selectCurrencyListHeader);
  };

  convertDate(date: Date): string {
    const day: string = date.getDate().toString().padStart(2, '0');
    const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
    const year: string = date.getFullYear().toString();

    return [day, month, year].join('.');
  };

}
