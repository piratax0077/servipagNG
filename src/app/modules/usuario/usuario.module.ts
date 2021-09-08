import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './usuario-routing.module';
import { HomeUserComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormRegisterUserComponent, TableUserComponent } from 'src/app/shared/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeUserComponent,
    RegisterComponent,
    UserListComponent,
    TableUserComponent,
    FormRegisterUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UsuarioModule { }
