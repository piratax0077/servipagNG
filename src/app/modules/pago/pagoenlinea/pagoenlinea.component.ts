import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pago } from 'src/app/shared/models/pago';

@Component({
  selector: 'app-pagoenlinea',
  templateUrl: './pagoenlinea.component.html',
  styleUrls: ['./pagoenlinea.component.css']
})
export class PagoenlineaComponent implements OnInit {

  flag: boolean;
  pago: Pago;
  mensaje: any;

  constructor(private route : ActivatedRoute) { 
    this.flag = this.route.snapshot.params.flag;
    this.pago = {
      idEmpresa:1,
      idServicio:0,
      nCliente:0,
      deudaTotal:0
    }
    this.mensaje = '';
  }

  ngOnInit(): void {
    
  }

  addPago(obj: Pago){
      this.pago = obj;
  }

  getMensaje(msj: string){
    this.mensaje = msj;
  }

}
