import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MiauthRoutingModule} from './miauth-routing.module';
import {MiauthComponent, MiauthComponentLogoutDialog} from './miauth.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    MiauthComponent,
    MiauthComponentLogoutDialog
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
