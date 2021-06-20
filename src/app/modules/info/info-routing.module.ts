import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';

const routes: Routes = [
    {path:'',component:ComoFuncionaComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class InfoRoutingModule {}