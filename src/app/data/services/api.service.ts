import { Injectable } from '@angular/core';
import { iTableroPago } from 'src/app/shared/components/tablero-pago/tablero-pago.interface';
import { Pago } from 'src/app/shared/models/pago';
import { User } from 'src/app/shared/models/user';
import { EMPRESAS_DATA } from '../constanst/empresas.const';
import { USERS_DATA } from '../constanst/users.const';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public pagos: Array<Pago>;
  public allServices: Array<iTableroPago>;
  public deudaTotal: number;
  public users: Array<User>;

  constructor() { 
    this.pagos = [];
    this.allServices = EMPRESAS_DATA;
    this.deudaTotal = 0;
    this.users = USERS_DATA;
  }

  getPagos(){
    return this.pagos;
  }

  getDeudaTotal(){
    return this.deudaTotal;
  }

  getUsers(){
    return this.users;
  }


  getAllServices(){
    return this.allServices;
  }
}
