import { Component, OnInit, Input } from '@angular/core';
import { ApisService } from '../apis.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor( private apisService: ApisService ) {}

  nextUsers = 0;
  users;
  fromUser: number = 0;
  toUser: number = this.fromUser + 10;

  ngOnInit() {
    this.apisService.getUsers().subscribe(
        (response) => { 
          this.users = response;
        })
      console.log('response this users' + this.users)

  }

  next() {
    this.fromUser += 10;
    this.toUser += 10;
    if (this.fromUser === 30) {
      this.fromUser = 0;
      this.toUser = 10;
    }
  }

  previous() {
    this.fromUser -= 10;
    this.toUser -= 10;
    if (this.fromUser < 0) {
      this.fromUser = 20;
      this.toUser = 30;
    }
  }

}
