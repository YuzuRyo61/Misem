import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LogoutComponent} from './dialog/logout/logout.component';

@Component({
  selector: 'app-miauth',
  templateUrl: './miauth.component.html',
  styleUrls: ['./miauth.component.css']
})
export class MiauthComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  logoutConfirm(): void {
    const dialogLogout = this.dialog.open(LogoutComponent, {
      width: '450px'
    });

    dialogLogout.afterClosed().subscribe(result => {
      if (result !== true) {
        return;
      }
      // TODO: この中にログアウトするための処理を書く
    });
  }
}
