import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './usuario-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeUserComponent } from './home/home.component';

@NgModule({
  declarations: [
  
    HomeUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
