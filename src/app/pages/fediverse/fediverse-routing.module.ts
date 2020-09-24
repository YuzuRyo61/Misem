import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FediverseComponent} from "./fediverse.component";

const routes: Routes = [
  {
    path: '',
    component: FediverseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FediverseRoutingModule { }
