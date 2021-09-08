import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoRoutingModule } from './pago-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagoenlineaComponent } from './pagoenlinea/pagoenlinea.component';
import { BuscadorComponent, CarruselComponent, SidebarComponent, SubmenuComponent, TableroPagoComponent } from 'src/app/shared/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FilterServiciosPipe } from 'src/app/shared/pipes/filter-servicios.pipe';

@NgModule({
  declarations: [
    PagoenlineaComponent,
    HomeComponent,
    TableroPagoComponent,
    SidebarComponent,
    BuscadorComponent,
    CarruselComponent,
    SubmenuComponent,
    FilterServiciosPipe
  ],
  imports: [
    CommonModule,
    PagoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagoModule { }
