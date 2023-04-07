import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.m';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() user: User | undefined;
  constructor() {}

  ngOnInit() {}
}
