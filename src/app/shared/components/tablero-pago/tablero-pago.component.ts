import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { EMPRESAS_AGUA } from 'src/app/data/constanst/eAgua.const';
import { EMPRESAS_ALIMENTO } from 'src/app/data/constanst/eAlimento.const';
import { EMPRESAS_AUTOPISTA } from 'src/app/data/constanst/eAutopistas.const';
import { EMPRESAS_LUZ } from 'src/app/data/constanst/eLuz.const';
import { EMPRESAS_TELEFONIA } from 'src/app/data/constanst/eTelefonia.const';
import { ApiService } from 'src/app/data/services/api.service';
import {EMPRESAS_DATA} from '../../../data/constanst/empresas.const';
import { Pago } from '../../models/pago';
import { iTableroPago } from './tablero-pago.interface';
declare var $: any;

@Component({
  selector: 'app-tablero-pago',
  templateUrl: './tablero-pago.component.html',
  styleUrls: ['./tablero-pago.component.css']
})
export class TableroPagoComponent implements OnInit {

  @Output() añadirPago = new EventEmitter<Pago>();
  @Output() mensaje = new EventEmitter<string>();

  empresas_data: iTableroPago[];
  empresas_agua: any [];
  empresas_luz: any[];
  empresas_telefonia: any[];
  empresas_autopista: any[];
  empresas_alimento: any[];
  display: boolean;
  display_luz: boolean;
  display_telefonia: boolean;
  display_autopista: boolean;
  display_alimentos: boolean;
  div: any;

  enabled: boolean;
  enabledLuz: boolean;
  enabledTelefonia: boolean;
  enabledAutopista: boolean;
  enabledAlimento: boolean;

  pago: Pago;
  pagoLuz: Pago;
  pagoTelefonia: Pago;
  pagoAutopista: Pago;
  pagoAlimento: Pago;

  constructor(public api: ApiService) { 
    this.empresas_data = EMPRESAS_DATA;
    this.empresas_agua = EMPRESAS_AGUA;
    this.empresas_luz = EMPRESAS_LUZ;
    this.empresas_telefonia = EMPRESAS_TELEFONIA;
    this.empresas_autopista = EMPRESAS_AUTOPISTA;
    this.empresas_alimento = EMPRESAS_ALIMENTO;
    
    this.enabled = true;
    this.enabledLuz = true;
    this.enabledTelefonia = true;
    this.enabledAlimento = true;
    this.enabledAutopista = true;

    this.display = false;
    this.display_luz = false;
    this.display_telefonia = false;
    this.display_autopista = false;
    this.display_alimentos = false;

    this.pago = {
      idServicio: 0,
      idEmpresa:1,
      nCliente:0,
      deudaTotal:0
    }

    this.pagoLuz={
      idServicio: 0,
      idEmpresa:1,
      nCliente:0,
      deudaTotal:0
    }

    this.pagoTelefonia={
      idServicio: 0,
      idEmpresa:1,
      nCliente:0,
      deudaTotal:0
    }

    this.pagoAutopista ={
      idServicio: 0,
      idEmpresa:1,
      nCliente:0,
      deudaTotal:0
    }
    this.pagoAlimento ={
      idServicio: 0,
      idEmpresa:1,
      nCliente:0,
      deudaTotal:0
    }
  }

  ngOnInit(): void {
  }

  getForm(id: any){
    console.log(id);
    this.div = document.getElementById(id);

    
    if(this.div !== null){
      switch(id){
        case(1):
          this.display = true;
          this.pago.idServicio = 1;
          this.pago.deudaTotal = 32000;
          break;
        case(2):
          this.display_luz = true;
          this.pagoLuz.idServicio = 2;
          this.pagoLuz.deudaTotal = 18000;
          break;
        case(3):
          this.display_telefonia = true;
          this.pagoTelefonia.idServicio = 3;
          this.pagoTelefonia.deudaTotal = 10000;
          break;
        case(4):
          this.display_autopista = true;
          this.pagoAutopista.idServicio = 4
          this.pagoAutopista.deudaTotal = 0;
          break;
        case(5):
          this.display_alimentos = true;
          this.pagoAlimento.idServicio = 5;
          this.pagoAlimento.deudaTotal = 0;
          break;
      }
      
      this.div.hidden = true;
      
      // div.innerHTML = '<p>Hola mundo </p>';
    }
    
  }

  pagarServicio(obj: Pago){
    switch(obj.idServicio){
      case(1):
      this.enabled = false;
      break;
      case(2):
      this.enabledLuz = false;
      break;
      case(3):
      this.enabledTelefonia = false;
      break;
      case(4):
      this.enabledAutopista = false;
      break;
      case(5):
      this.enabledAlimento = false;
    }

    if(obj.deudaTotal !== 0){
      this.api.pagos.push(obj);
      this.añadirPago.emit(obj);
      alert('Su cuenta ha sido añadida ');
    }else{
      this.mensaje.emit('No existe deuda');
    }

  }

}
