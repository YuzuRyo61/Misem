import {Component, OnInit} from '@angular/core';

/*
// Misskeyをリバース・エンジニアリングしたけど、10/09現在利用しているモデレーションログの種類はこいつら
'updateMeta',
'clearQueue',
'vacuum',
'chartResync',
'silence',
'unsilence',
'addEmoji',
'removeEmoji',
'suspend',
'unsuspend',
 */

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
