import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QueueRoutingModule} from './queue-routing.module';
import {QueueComponent} from './queue.component';
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [QueueComponent],
  imports: [
    CommonModule,
    QueueRoutingModule,
    MatCardModule,
    FlexModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class QueueModule {
}
