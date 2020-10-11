import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

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
    const dialogLogout = this.dialog.open(MiauthComponentLogoutDialog, {
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

@Component({
  selector: 'app-miauth-logout-dialog',
  templateUrl: './miauth-logout-dialog.component.html'
})
export class MiauthComponentLogoutDialog {
  constructor(
    public dialogLogout: MatDialogRef<MiauthComponentLogoutDialog>) {
  }

  close(): void {
    this.dialogLogout.close();
  }
}
