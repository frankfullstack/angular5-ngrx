import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { operationsReducer } from './common/reducer'; // import the reducer
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ item: operationsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
