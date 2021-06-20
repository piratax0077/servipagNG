import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'pago', 
    pathMatch: 'full'
  },
  { 
    path:'pago', 
    component: SkeletonComponent, 
    children:[
      {path:'home', loadChildren:() => import('./modules/pago/pago.module').then((m) => m.PagoModule)},
      {path:'**', redirectTo:'/pago/home', pathMatch:'full'}]
  },
  {
    path:'info',
    component: SkeletonComponent,
    children:[
      {path:'home',loadChildren: () => import('./modules/info/info.module').then((m) => m.InfoModule)},
      {path:'**', redirectTo:'/info/home', pathMatch:'full'}
    ]
  },{
    path:'user',
    component: SkeletonComponent,
    children:[
      {path:'register',loadChildren:() => import('./modules/usuario/usuario.module').then((m) => m.UsuarioModule)},
      {path:'**', redirectTo:'/user/register', pathMatch:'full'}
    ]
  },
  {
    path:'**',
    redirectTo:'/pago/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
