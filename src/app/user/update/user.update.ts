import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { User } from '../user';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-update-user',
  templateUrl: './user.update.html',
})
export class UserUpdate implements OnInit {
  userId: string;
  userName: string;
  user = new User('', '', '');

  constructor(private api: APIService) {}

  ngOnInit(): void {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then(async (user) => {
        this.userId = user.attributes.sub;
        this.userName = user.userName;
      })
      .catch((err) => console.log(err));
  }

  async updateUser() {
    const user = {
      id: this.userId,
      name: this.userName,
    };
  }
}
