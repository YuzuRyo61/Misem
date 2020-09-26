import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FediverseRoutingModule} from './fediverse-routing.module';
import {FediverseComponent} from './fediverse.component';


@NgModule({
  declarations: [FediverseComponent],
  imports: [
    CommonModule,
    FediverseRoutingModule
  ]
})
export class FediverseModule {
}
