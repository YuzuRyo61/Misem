import {Component, OnInit} from '@angular/core';

// TODO: 仮置きインターフェース。移動予定
export interface delayInstance {
  domain: string;
  delayCount: number
}


@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  displayedColumns: string[] = ['domain', 'delayCount'];
  delayInboundInstance: delayInstance[] = [
  ]
  delayOutboundInstance: delayInstance[] = [
    {
      domain: 'example.com',
      delayCount: 1
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
