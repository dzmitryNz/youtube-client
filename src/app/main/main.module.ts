import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from '../header/account/account.component';
import { HeaderComponent } from '../header/header.component';
import { MaterialModule } from '../shared/material/material.module';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent,
    AccountComponent,
  ],
  imports: [ MaterialModule, BrowserModule, FormsModule ],
  exports: [
    HeaderComponent,
    MaterialModule,
    SearchItemComponent,
    SearchResultsComponent,
    AccountComponent,
  ]
})

export class MainModule {}
