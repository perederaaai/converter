import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ConverterComponent } from './converter/converter.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        component: ConverterComponent,
      },
    ]
  }
]

@NgModule({
  declarations: [
    MainLayoutComponent,
    ErrorPageComponent,
    ConverterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ]
})
export class ConverterModule { }
