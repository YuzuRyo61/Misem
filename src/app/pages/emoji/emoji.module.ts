import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmojiRoutingModule } from './emoji-routing.module';
import {EmojiComponent} from './emoji.component';


@NgModule({
  declarations: [EmojiComponent],
  imports: [
    CommonModule,
    EmojiRoutingModule
  ]
})
export class EmojiModule { }
