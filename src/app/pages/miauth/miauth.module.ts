import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MiauthRoutingModule} from './miauth-routing.module';
import {MiauthComponent} from './miauth.component';
import {LogoutComponent} from './dialog/logout/logout.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    MiauthComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    MiauthRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MiauthModule {
}
