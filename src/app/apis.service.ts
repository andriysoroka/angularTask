import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApisService {

  constructor(private http: HttpClient) { }

  users = 'https://api.github.com/users';
  user = 'https://api.github.com/users/';
  organizations = 'https://api.github.com/organizations';

  getUsers(): Observable<any> {
    return this.http.get(this.users)
  };

  getOrganizations(): Observable<any> {
    return this.http.get(this.organizations)
  };

  getUser(userLogin): Observable<any> {
    return this.http.get(this.user + userLogin)
  }

  getUserSubscriptions(userLogin): Observable<any> {
    return this.http.get(this.user + userLogin + '/subscriptions')
  }

  getUserFollowers(userLogin): Observable<any> {
    return this.http.get(this.user + userLogin + '/followers')
  }  

  getUserOrganizations(userLogin): Observable<any> {
    return this.http.get(this.user + userLogin + '/orgs')
  }

}
