import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InstanceRoutingModule} from './instance-routing.module';
import {InstanceComponent} from './instance.component';


@NgModule({
  declarations: [InstanceComponent],
  imports: [
    CommonModule,
    InstanceRoutingModule
  ]
})
export class InstanceModule {
}
