import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../modules/pago/home/home.component';
import * as fromComponents  from './components';
import { PagoenlineaComponent } from '../modules/pago/pagoenlinea/pagoenlinea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterServiciosPipe } from './pipes/filter-servicios.pipe';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../modules/usuario/register/register.component';
import { UserListComponent } from '../modules/usuario/user-list/user-list.component';
import { TableUserComponent } from './components/table-user/table-user.component';
import { IndicadoresEconomicosComponent } from './components/indicadores-economicos/indicadores-economicos.component';

@NgModule({
  declarations: [
    ...fromComponents.components,
    HomeComponent,
    PagoenlineaComponent,
    RegisterComponent,
    UserListComponent,
    FilterServiciosPipe,
    TableUserComponent,
    IndicadoresEconomicosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
