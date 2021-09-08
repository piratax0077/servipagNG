import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { iTableroPago } from 'src/app/shared/components/tablero-pago/tablero-pago.interface';
import { Login } from 'src/app/shared/models/login';
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
  public userLogged: any;
  private pagos$ = new Subject<any>();

  constructor() { 
    this.pagos = [];
    this.allServices = EMPRESAS_DATA;
    this.deudaTotal = 0;
    this.users = USERS_DATA;
  }

  getPagos(){
    return this.pagos;
  }

  setPago(pago: any){
    this.pagos.push(pago);
    this.pagos$.next(this.pagos);
  }

  getPagos$(): Observable<any>{
    return this.pagos$.asObservable();
  }

  getDeudaTotal(){
    return this.deudaTotal;
  }

  getUserLogged(){
    return this.userLogged;
  }

  getUsers(){
    return this.users;
  }

  getAllServices(){
    return this.allServices;
  }

  login(userLogin: Login){
    let email = userLogin.email;
    let password = userLogin.password;

    if(email === 'francisco@gmail.com' && password === "1234567"){
      this.userLogged = userLogin;
      return this.userLogged;
    }else{
      return null;
    }
  }
}
