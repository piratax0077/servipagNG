import { Injectable } from '@angular/core';
import { iTableroPago } from 'src/app/shared/components/tablero-pago/tablero-pago.interface';
import { Pago } from 'src/app/shared/models/pago';
import { EMPRESAS_DATA } from '../constanst/empresas.const';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public pagos: Array<Pago>;
  public allServices: Array<iTableroPago>;
  public deudaTotal: number;

  constructor() { 
    this.pagos = [];
    this.allServices = EMPRESAS_DATA;
    this.deudaTotal = 0;
  }

  getPagos(){
    return this.pagos;
  }

  getDeudaTotal(){
    return this.deudaTotal;
  }

  // setPago(obj: Pago){
  //   let newPago: Pago = new Pago(obj.idServicio,obj.idEmpresa,obj.nCliente,obj.deudaTotal);
  //   this.deudaTotal += obj.deudaTotal;
  //   console.log(obj.deudaTotal);
  //   return this.pagos.push(newPago);
  // }


  getAllServices(){
    return this.allServices;
  }
}
