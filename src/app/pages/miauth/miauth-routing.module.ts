import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MiauthComponent} from './miauth.component';

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
export class MiauthRoutingModule {
}
