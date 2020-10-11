import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

// TODO: 仮置きインターフェース。移動予定
interface DelayInstance {
  domain: string;
  delayCount: number;
}


@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['domain', 'delayCount'];
  delayInboundInstance: MatTableDataSource<DelayInstance> = new MatTableDataSource([]);
  delayOutboundInstance: MatTableDataSource<DelayInstance> = new MatTableDataSource([
    {
      domain: 'example.com',
      delayCount: 1
    },
    {
      domain: 'a.example.com',
      delayCount: 2
    },
    {
      domain: 'b.example.com',
      delayCount: 5
    }
  ]);

  @ViewChild(MatSort) sortDelayInbound: MatSort;
  @ViewChild(MatSort) sortDelayOutbound: MatSort;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.delayInboundInstance.sort = this.sortDelayInbound;
    this.delayOutboundInstance.sort = this.sortDelayOutbound;
  }

}
