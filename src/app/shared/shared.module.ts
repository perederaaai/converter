import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {CustomInputComponent} from "./components/custom-input/custom-input.component";
import {CustomSelectComponent} from "./components/custom-select/custom-select.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";


@NgModule({
  declarations: [
    CustomSelectComponent,
    CustomInputComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    CustomSelectComponent,
    CustomInputComponent,
    ErrorPageComponent
  ],
})
export class SharedModule {
}
