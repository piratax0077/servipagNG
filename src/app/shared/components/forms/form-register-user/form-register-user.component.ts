import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USERS_DATA } from 'src/app/data/constanst/users.const';
import { User } from 'src/app/shared/models/user';
import { ApiRegionesService } from 'src/app/shared/services/api-regiones.service';

@Component({
  selector: 'app-form-register-user',
  templateUrl: './form-register-user.component.html',
  styleUrls: ['./form-register-user.component.css']
})
export class FormRegisterUserComponent implements OnInit {

  regiones: Array<any> = [];
  region: any;
  comunas: Array<any> = [];
  enabledBtnRegion: boolean;
  user: User;
  users: Array<User>;

  formSeccion1: FormGroup;
  formSeccion2: FormGroup;
  formSeccion3: FormGroup;

  constructor(public apiRegiones: ApiRegionesService, public fb: FormBuilder) { 
     
    this.formSeccion1 = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(6)]],
      apellidos: ['',Validators.required]
    });
    
    this.formSeccion2 = this.fb.group({
      rut: ['',[Validators.required]]
    });

    this.formSeccion3 = this.fb.group({
      region:['',[Validators.required]],
      comuna:['',[Validators.required]]
    });

    this.regiones = this.apiRegiones.getRegionesJSON();
    this.enabledBtnRegion = false;
    this.user = {
      id:0,
      nombre:'',
      apellidos:'',
      idRegion:'',
      idCiudad:'',
      rut:''
    }

    this.users = USERS_DATA;
 }

  ngOnInit(): void {
  }

  getComuna(id: string){
    this.user.idCiudad = id;
  }

  getComunasByNombre(obj: string){
    this.region = this.regiones.find( e => e.region === obj);
    this.user.idRegion = obj;
    this.comunas = this.region.comunas;
    this.enabledBtnRegion = true;
  }



  // ------------------------------ Pruebas ---------------------------------- //

  sendSeccion1(){
    console.log(this.formSeccion1.value);
    this.user.nombre = this.formSeccion1.value.nombre;
    this.user.apellidos = this.formSeccion1.value.apellidos;
  }

  sendSeccion2(){
    console.log(this.formSeccion2.value);
    this.user.rut = this.formSeccion2.value.rut;
  }

  sendSeccion3(){
    console.log(this.formSeccion3.value);
    this.user.idRegion = this.formSeccion3.value.region;
    this.user.idCiudad = this.formSeccion3.value.comuna;

    console.log(this.user);
    this.users.push(this.user);
    alert('Usuario agregado con éxito');
  }

  get form(){
    return this.formSeccion1.controls;
  }

  get form2(){
    return this.formSeccion2.controls;
  }

  get form3(){
    return this.formSeccion3.controls;
  }

  

}
