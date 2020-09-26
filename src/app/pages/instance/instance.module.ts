import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InstanceRoutingModule} from './instance-routing.module';
import {InstanceComponent} from './instance.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [InstanceComponent],
  imports: [
    CommonModule,
    InstanceRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    FlexModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
  ]
})
export class InstanceModule {
}
