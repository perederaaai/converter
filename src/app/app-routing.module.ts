import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';

const routes: Routes = [

    {
      path: '',
      loadChildren: () => import('./modules/converter/converter.module').then(m => m.ConverterModule)
    },
    {
      path: '**',
      component: ErrorPageComponent
    }

  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
