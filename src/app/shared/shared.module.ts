import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../modules/pago/home/home.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import * as fromComponents  from './components';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagoenlineaComponent } from '../modules/pago/pagoenlinea/pagoenlinea.component';
import { TableroPagoComponent } from './components/tablero-pago/tablero-pago.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterServiciosPipe } from './pipes/filter-servicios.pipe';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ...fromComponents.components,
    HomeComponent,
    PagoenlineaComponent,
    CarruselComponent,
    BuscadorComponent,
    SidebarComponent,
    TableroPagoComponent,
    FilterServiciosPipe,
    SubmenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
