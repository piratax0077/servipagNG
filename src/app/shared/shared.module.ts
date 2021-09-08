import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../modules/pago/home/home.component';
import * as fromComponents  from './components';
import { PagoenlineaComponent } from '../modules/pago/pagoenlinea/pagoenlinea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterServiciosPipe } from './pipes/filter-servicios.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    // ...fromComponents.components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
