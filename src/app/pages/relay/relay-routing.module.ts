import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RelayComponent} from './relay.component';

const routes: Routes = [
  {
    path: '',
    component: RelayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelayRoutingModule {
}
