export class User {
    id: number;
    nombre: string;
    apellidos: string;
    rut: string;
    idRegion: string;
    idCiudad: string;

    constructor(id: number, nombre: string, apellidos: string, rut: string,idRegion: string, idCiudad: string ){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.rut = rut;
        this.idRegion = idRegion;
        this.idCiudad = idCiudad;
    }
}
