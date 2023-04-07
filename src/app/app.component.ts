import { Component } from '@angular/core';
import { faCoffee, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { User } from './models/user.m';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Blogem';
  faCoffee = faCoffee;
  faGithub = faGithub;
  faNetworkWired = faNetworkWired;
  user: User;

  /**
   *
   */
  constructor() {
    this.user = {
      id: '123',
      email: 'email@domain.com',
      firstName: 'Hugh',
      lastName: 'Jackman',
      photoUrl: 'url',
    };
  }
}
