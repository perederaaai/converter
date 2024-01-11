import {HttpClientModule} from "@angular/common/http";
import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {reducers} from './reducers';
import {currencyEffects} from "./reducers/currency/currency.effects";
import {CustomInputComponent} from './shared/custom-input/custom-input.component';
import {CustomSelectComponent} from './shared/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CustomSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([currencyEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
