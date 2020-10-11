import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-miauth-dialog-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {
  constructor(
    public dialogLogout: MatDialogRef<LogoutComponent>) {
  }

  close(): void {
    this.dialogLogout.close();
  }
}
