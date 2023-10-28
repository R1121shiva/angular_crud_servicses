import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ListComponent } from './component/list/list.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'about/:id',
    component:AboutComponent
  },
  {
    path:'list',
    component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
