import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiauthRoutingModule } from './miauth-routing.module';
import {MiauthComponent} from "./miauth.component";


@NgModule({
  declarations: [
    MiauthComponent
  ],
  imports: [
    CommonModule,
    MiauthRoutingModule
  ]
})
export class MiauthModule { }
