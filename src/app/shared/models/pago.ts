export class Pago {
    idServicio: number;
    idEmpresa: number;
    nCliente: number;
    deudaTotal: number;
    
    constructor(id: number, idEmpresa: number, nCliente: number, deudaTotal: number){
        this.idServicio = id;
        this.idEmpresa = idEmpresa;
        this.nCliente = nCliente;
        this.deudaTotal = deudaTotal;
    }
}
