import { Component, OnInit } from '@angular/core';
import { REGIONES_CHILE } from 'src/app/data/constanst/regionesChile.const';
import { ApiRegionesService } from 'src/app/shared/services/api-regiones.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regiones: Array<any> = [];
  region: any;
  comunas: Array<any> = [];
  enabledBtnRegion: boolean;

  constructor(public apiRegiones: ApiRegionesService) { 
     
     this.regiones = this.apiRegiones.getRegionesJSON();
     this.enabledBtnRegion = false;
  }

  ngOnInit(): void {
  }

  getComunasByNombre(obj: string){
    this.region = this.regiones.find( e => e.region === obj);
    this.comunas = this.region.comunas;
    this.enabledBtnRegion = true;
  }

}
