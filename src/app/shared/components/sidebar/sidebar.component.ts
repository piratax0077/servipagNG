import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { LISTA_BANCOS } from 'src/app/data/constanst/listaBancos.const';
import { ApiService } from 'src/app/data/services/api.service';
import { Pago } from '../../models/pago';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {

  @Input() addPago: Pago;
  @Input() mensaje: string;

  public newPago: Pago;
  public pagos: Array<Pago> = this.api.getPagos();
  public pagos$!: Observable<any>;
  public deudaTotal: number;

  public lista_bancos: Array<any>;

  constructor(public api: ApiService) { 
    this.addPago = {
      idEmpresa:1,
      idServicio:0,
      nCliente:0,
      deudaTotal:0
    }

    this.newPago = {
      nCliente:0,
      deudaTotal:0,
      idEmpresa:1,
      idServicio:0
    }
    this.mensaje = '';
    this.deudaTotal = this.api.deudaTotal;
    this.lista_bancos = LISTA_BANCOS;
    this.api.pagos = this.pagos;
    console.log(this.api.pagos);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.doSomething(this.addPago);

  }

  ngOnInit(): void {
    // this.pagos = this.api.getPagos();
    
  }

  doSomething(obj: Pago){
    let deuda = obj.deudaTotal;
    this.deudaTotal += deuda;

    this.api.deudaTotal = this.deudaTotal;
    
  }

  removePago(pago: Pago){
    let opt = confirm('¿Está seguro de querer eliminar esta cuenta?');
    if(opt){
      this.restarDeudaTotal(pago.deudaTotal);
      let index = this.pagos.indexOf(pago);
      this.api.pagos.splice(index,1);
    }
    
  }

  restarDeudaTotal(valorDeuda: number){
    this.deudaTotal -= valorDeuda;
    this.api.deudaTotal = this.deudaTotal;
  }

}
