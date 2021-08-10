import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';
import { MaterialModule } from '../shared/material/material.module';
import { TitleFilterPipe } from '../shared/pipes/filter.pipe';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent,
    TitleFilterPipe,
    SortPipe,
  ],
  imports: [ MaterialModule, BrowserModule, FormsModule ],
  exports: [
    HeaderComponent,
    MaterialModule,
    SearchItemComponent,
    SearchResultsComponent,
  ]
})
export class MainModule {}
