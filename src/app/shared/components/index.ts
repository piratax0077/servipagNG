import { BuscadorComponent } from "./buscador/buscador.component";
import { CarruselComponent } from "./carrusel/carrusel.component";

import { SidebarComponent } from "./sidebar/sidebar.component";
import { SubmenuComponent } from "./submenu/submenu.component";
import { TableroPagoComponent } from "./tablero-pago/tablero-pago.component";
import { FormRegisterUserComponent } from "./forms/form-register-user/form-register-user.component";
import { TableUserComponent } from "./table-user/table-user.component";
import { IndicadoresEconomicosComponent } from "./indicadores-economicos/indicadores-economicos.component";


export const components: any[] = [
    BuscadorComponent,
    CarruselComponent,
    SidebarComponent,
    SubmenuComponent,
    TableroPagoComponent,
    FormRegisterUserComponent,
    TableUserComponent,
    IndicadoresEconomicosComponent
]

export * from './buscador/buscador.component';
export * from './carrusel/carrusel.component';
export * from './sidebar/sidebar.component'
export * from './submenu/submenu.component';
export * from './tablero-pago/tablero-pago.component';
export * from './forms/form-register-user/form-register-user.component';
export * from './table-user/table-user.component';
export * from './indicadores-economicos/indicadores-economicos.component';