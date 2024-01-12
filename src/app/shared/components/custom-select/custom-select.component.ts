import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {IExchangeRate} from "../../../interface/interface";

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    },
  ]
})
export class CustomSelectComponent implements ControlValueAccessor {
  @Input() currencyList: IExchangeRate[];
  @Input() label: string;
  public selectedValue: string;
  public onChange: (p: any) => void = (): void => {
  };
  public onTouched: () => void = (): void => {
  };

  writeValue(value: string): void {
    this.selectedValue = value;
  };

  registerOnChange(fn: any): void {
    this.onChange = fn
  };

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  };

  onSelectionChange(event: any): void {
    this.selectedValue = event.value;
    this.onChange(this.selectedValue);
    this.onTouched();
  };
}
