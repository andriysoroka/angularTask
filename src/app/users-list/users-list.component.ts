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
  newUsers;
  organizations;
  isUsers: boolean;
  isOrgs: boolean;
  isLoading: boolean;
  renderList;
  currentList;
  fromUser: number = 0;
  toUser: number = this.fromUser + 10;

  ngOnInit() {
    this.isLoading = true;
    this.apisService.getUsers().subscribe(
      (response) => { 
        this.renderList = response;
        this.currentList = response;
        this.users = response;
        this.isLoading = false;
    });
    this.apisService.getOrganizations().subscribe(
      response => this.organizations = response
    )
    this.isUsers = true;
      console.log('response this users' + this.users, this.organizations);

  }

  search(value) {
    value === "" ? 
    this.renderList = this.currentList
    : this.renderList = this.currentList.filter(user => user.login.includes(value))
    console.log(this.newUsers);
  }

  showUsers() {
    this.isUsers = true;
    this.isOrgs = false;
    this.renderList = this.users;
    this.currentList = this.users;
  }

  showOrgs() {
    this.isOrgs = true;
    this.isUsers = false;
    this.renderList = this.organizations;
    this.currentList = this.organizations;
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
