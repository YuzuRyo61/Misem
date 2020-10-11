import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users = Array.from({length: 10}).map((_, i) => {
    return {
      id: `id${i}`,
      username: 'example',
      host: 'example.com',
      displayName: 'Example User',
      accountImage: 'https://...'
    };
  });

  constructor() {
  }

  ngOnInit(): void {
  }

}
