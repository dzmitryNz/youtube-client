import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../header/header.component';
import { MaterialModule } from '../shared/material/material.module';
import { NameFilterPipe } from '../shared/pipes/filter.pipe';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchResponseComponent } from './search-response/search-response.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchItemComponent,
    SearchResponseComponent,
    NameFilterPipe
  ],
  imports: [ MaterialModule, BrowserModule, FormsModule ],
  exports: [
    HeaderComponent,
    MaterialModule,
    SearchItemComponent,
    SearchResponseComponent
  ]
})
export class MainModule {


 }
