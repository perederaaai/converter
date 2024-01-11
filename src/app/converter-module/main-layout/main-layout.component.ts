import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getCurrencyRate} from "../../reducers/currency/currency.action";
import {CurrencyService} from "../../service/currency.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  private currencyService: CurrencyService = inject(CurrencyService);
  private store$: Store = inject(Store);


  ngOnInit(): void {
    this.getInitialData();
  }

  getInitialData(): void {
    const date = this.convertDate(new Date());
    this.store$.dispatch(getCurrencyRate({date}));
  }

  convertDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return [day, month, year].join('.');
  }
}
