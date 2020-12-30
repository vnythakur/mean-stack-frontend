import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';
import { ActionButtonComponent } from './search/action-button/action-button.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProfileComponent,
    ActionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([ActionButtonComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
