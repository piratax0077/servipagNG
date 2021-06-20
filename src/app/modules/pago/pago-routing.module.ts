import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagoenlineaComponent } from './pagoenlinea/pagoenlinea.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'pagoenlinea', component:PagoenlineaComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PagoRoutingModule {}