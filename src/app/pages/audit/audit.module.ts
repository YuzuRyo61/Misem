import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuditRoutingModule} from './audit-routing.module';
import {AuditComponent} from './audit.component';
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";


@NgModule({
  declarations: [AuditComponent],
  imports: [
    CommonModule,
    AuditRoutingModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class AuditModule {
}
