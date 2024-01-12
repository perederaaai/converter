import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    },
  ]
})

export class CustomInputComponent implements ControlValueAccessor {

  @Input() labelText: string = '';
  @Input() placeholder: string = 'Enter currency';
  @Input() disabledTrigger: boolean = true;
  public value: string;
  public onChange: (p: string) => void = (): void => {
  };
  public onTouched: () => void = (): void => {
  };

  writeValue(value: string): void {
    this.value = value;
  };

  registerOnChange(fn: any): void {
    this.onChange = fn
  };

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  };

  onValueChange(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
  };

}
