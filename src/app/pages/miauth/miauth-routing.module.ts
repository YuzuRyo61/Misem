import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MiauthComponent} from "./miauth.component";

const routes: Routes = [
  {
    path: '',
    component: MiauthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiauthRoutingModule { }
