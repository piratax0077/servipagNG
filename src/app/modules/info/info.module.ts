import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoRoutingModule } from './info-routing.module';


@NgModule({
  declarations: [
    ComoFuncionaComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    SharedModule
  ]
})
export class InfoModule { }
