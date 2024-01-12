import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../../shared/shared.module";
import {ConverterComponent} from './components/converter-component/converter.component';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {ConverterRoutingModule} from "./converter-routing.module";

@NgModule({
  declarations: [
    MainLayoutComponent,
    ConverterComponent
  ],
  imports: [
    ConverterRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatProgressSpinnerModule
  ]
})
export class ConverterModule {
}
