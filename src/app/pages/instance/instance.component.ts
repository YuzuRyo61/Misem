import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})
export class InstanceComponent implements OnInit {
  iconUrl = new FormControl(
    '',
    [
      Validators.pattern('https?://([\\w-]+\\.)+[\\w-]+(/[\\w- .?%&=]*)?')
    ]
  );
  bannerUrl = new FormControl(
    '',
    [
      Validators.pattern('https?://([\\w-]+\\.)+[\\w-]+(/[\\w- .?%&=]*)?')
    ]
  );
  termUrl = new FormControl(
    '',
    [
      Validators.pattern('https?://([\\w-]+\\.)+[\\w-]+(/[\\w- .?%&=]*)?')
    ]
  );
  noteLengthForm = new FormControl(
    '',
    [
      Validators.min(1),
      Validators.required
    ]
  );
  adminEmail = new FormControl(
    '',
    [
      Validators.email
    ]
  );
  openRegister = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  getNoteLengthError() {
    if (this.noteLengthForm.hasError('required')) {
      return '値を入力してください。';
    }

    return this.noteLengthForm.hasError('min') ? '文字数制限は1以上を設定してください。' : '';
  }

}
