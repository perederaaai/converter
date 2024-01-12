import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ConverterComponent} from './components/converter-component/converter.component';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ConverterComponent,
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConverterRoutingModule {
}
