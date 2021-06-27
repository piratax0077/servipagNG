import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from 'src/app/shared/guard/is-logged.guard';
import { HomeUserComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
    {path:'',component:RegisterComponent},
    {path:'home', component:HomeUserComponent, canActivate:[IsLoggedGuard]},
    {path:'user-list',component: UserListComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UserRoutingModule {}