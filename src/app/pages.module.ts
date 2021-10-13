import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesRoutingModule } from './pages-routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    NgbDropdownModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
