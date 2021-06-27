import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/data/services/api.service';
import { Login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @ViewChild('closebutton') closebutton: any;

  formLogin: FormGroup;
  error: string;
  user: any;
  switch_login: boolean;

  constructor(public fb: FormBuilder, public api: ApiService, public router: Router) { 
    this.formLogin = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength]]
    });
    this.error = '';
    this.user = this.api.getUserLogged;
    this.switch_login = true;
  }

  get form(){
    return this.formLogin.controls;
  }

  ngOnInit(): void {
  }

  login(){
    let obj = this.api.login(this.formLogin.value);
   
    if(obj === null){
      this.user = null;
      this.error = 'No existe ese usuario';
    }else{
      this.user = obj;
      this.router.navigate(['/user/register/home']);
      this.closebutton.nativeElement.click();
    }
    
    
  }

}
