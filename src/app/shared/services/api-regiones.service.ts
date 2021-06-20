import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { REGIONES_CHILE } from 'src/app/data/constanst/regionesChile.const';

@Injectable({
  providedIn: 'root'
})
export class ApiRegionesService {

  url: string = 'https://apis.digital.gob.cl/dpa/regiones';

  regiones: Array<any>;

  constructor(public http: HttpClient) { 
    this.regiones = REGIONES_CHILE;
  }

  getRegiones(): Observable<any>{
    return this.http.get(this.url);
  }

  getRegionesJSON(){
    return this.regiones;
  }
}
