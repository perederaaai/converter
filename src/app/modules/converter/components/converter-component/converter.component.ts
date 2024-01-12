import {Component, inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {ICalcValue, IExchangeRate} from "../../../../interface/interface";
import {IState} from "../../../../reducers";
import {selectCurrencyList} from "../../../../reducers/currency/currency.selector";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  public currencyRates$: Observable<IExchangeRate[] | null>;
  public form: FormGroup;
  public calcValue: ICalcValue;
  private store$: Store<IState> = inject(Store<IState>);
  private fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.getInitialData();
    this.initForm();
    this.formValueChange();
  };

  getInitialData(): void {
    this.currencyRates$ = this.store$.select(selectCurrencyList);
  };

  initForm(): void {
    this.form = this.fb.group({
      firstCurrency: ['', [Validators.required]],
      secondCurrency: ['', [Validators.required]],
      firstCurrAmount: [''],
      secondCurrAmount: [''],
    });
  };

  getControl(controlName: string): AbstractControl<any, IExchangeRate> | null {
    return this.form.get(controlName);
  };

  validationCheck(): boolean {
    return !!(this.getControl('firstCurrency')?.valid && this.getControl('secondCurrency')?.valid)
  };

  sendCalcValue(): void {
    if (!this.form.valid) return;
    this.calcValue = {
      firstCurr: this.getControl('firstCurrency')?.value.saleRateNB,
      secondCurr: this.getControl('secondCurrency')?.value.saleRateNB,
      firstValueInput: this.form.get('firstCurrAmount')?.value,
      secondValueInput: this.getControl('secondCurrAmount')?.value,
    };
  };

  calculateSFirstRate(): void {
    this.sendCalcValue();
    const value: number = (this.calcValue.firstValueInput * this.calcValue.firstCurr) / this.calcValue.secondCurr;
    this.form.get('secondCurrAmount')?.setValue((value).toFixed(2), {emitEvent: false});
  };

  calculateSecondRate(): void {
    this.sendCalcValue();
    const value: number = (this.calcValue.secondValueInput * this.calcValue.secondCurr) / this.calcValue.firstCurr;
    this.form.get('firstCurrAmount')?.setValue((value).toFixed(2), {emitEvent: false});
  };

  subscribeToValueChanges(controlName: string, calculateRateFn: () => void): void {
    this.form.get(controlName)?.valueChanges.subscribe({
      next: (): void => {
        if (this.form.invalid) return;
        calculateRateFn.call(this);
      },
      error: err => console.error('Control value changes error occured: ', err),
    });
  };

  formValueChange(): void {
    this.subscribeToValueChanges('firstCurrAmount', this.calculateSFirstRate);
    this.subscribeToValueChanges('secondCurrAmount', this.calculateSecondRate);
  };

}
