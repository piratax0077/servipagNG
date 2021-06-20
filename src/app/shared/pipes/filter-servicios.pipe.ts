import { Pipe, PipeTransform } from '@angular/core';
import { iTableroPago } from '../components/tablero-pago/tablero-pago.interface';

@Pipe({
  name: 'filterServicios'
})
export class FilterServiciosPipe implements PipeTransform {

  transform(serviciosUsuario: iTableroPago[], value: any): any[] {

    if(!serviciosUsuario){
      return []
    }

    if(!value){
      return serviciosUsuario;
    }

    value = value.toLocaleLowerCase();

    return serviciosUsuario.filter(servicio => {
      return servicio.descripcion.toLocaleLowerCase().includes(value);
    });
  }

}
