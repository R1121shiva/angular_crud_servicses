import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ListComponent } from './component/list/list.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent,
    canActivate:[authGuard]
  },
  {
    path:'about/:id',
    component:AboutComponent,
    canActivate:[authGuard]
  },
  {
    path:'list',
    component:ListComponent,
    canActivate:[authGuard]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
