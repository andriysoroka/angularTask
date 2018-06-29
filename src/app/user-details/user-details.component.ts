import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApisService } from '../apis.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor( 
    private apisService: ApisService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  user: object;
  userSubscriptions: object[];
  userFollowers: object[];
  userOrganizations: object[];
  isLoading: boolean;
  login = this.route.snapshot.paramMap.get('login');

  getUserByLogin(): void {
    this.login = this.route.snapshot.paramMap.get('login');
    this.apisService.getUser(this.login).subscribe(
      (response) => { 
        this.user = response;
        this.isLoading = false; 
        console.log(this.user)
      })
  }

  getUserSubscription(): void {
    this.apisService.getUserSubscriptions(this.login).subscribe(
      (response) => { 
        this.userSubscriptions = response;
        this.isLoading = false;
    })
  }

  getUserFollowers(): void {
    this.apisService.getUserFollowers(this.login).subscribe(
      (response) => { 
        this.userFollowers = response;
        this.isLoading = false;
      })
  }

  getUserOrganizations(): void {
    this.apisService.getUserOrganizations(this.login).subscribe(
      (response) => { 
        this.userOrganizations = response;
        this.isLoading = false;
      })
  }


  ngOnInit() {
    this.isLoading = true;
    this.getUserByLogin();
    this.getUserFollowers();
    this.getUserSubscription();
    this.getUserOrganizations();
  }

  toUsersList(): void {
    this.location.back();
  }

}
