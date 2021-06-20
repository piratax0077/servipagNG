import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/data/services/api.service';
import { iTableroPago } from '../tablero-pago/tablero-pago.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  allServices: Array<iTableroPago>;
  searchText: any;
  serviceSelected: iTableroPago;

  constructor(public api: ApiService) { 
    this.allServices = this.api.allServices;
    this.searchText = '';
    this.serviceSelected = {
      id:0,
      descripcion:'',
      path:''
    }
  }

  ngOnInit(): void {
  }

  getService(service: iTableroPago){
    this.searchText = service.descripcion;
    this.serviceSelected = service;

    console.log(this.serviceSelected);
  }

}
