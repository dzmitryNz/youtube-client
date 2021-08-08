import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchResponseComponent } from './search-response/search-response.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResponseComponent
  ],
  imports: [ MaterialModule ],
  exports: [ MaterialModule ]
})
export class MainModule { }
