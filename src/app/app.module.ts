import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomInputComponent } from './shared/custom-input/custom-input.component';
import { CustomSelectComponent } from './shared/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    CustomSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
