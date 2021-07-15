import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessfulLoginServerResponse } from '../components/Model/SuccessfulLoginServerResponse';
import { UserLoginDetails } from '../components/Model/UserLoginDetails';

@Injectable({
  providedIn: 'root',
})
export class UsersServices {
  userRole: string | null = sessionStorage.getItem('userRole');
  constructor(private http: HttpClient) {}

  public login(
    userLoginDetails: UserLoginDetails
  ): Observable<SuccessfulLoginServerResponse> {
    //  The http request will be sent after the subscribe() method will be called
    return this.http.post<SuccessfulLoginServerResponse>(
      'http://localhost:3001/users/login',
      userLoginDetails
    );
    // return this.http.post<SuccessfulLoginServerResponse>("/api/login", userLoginDetails);
  }
}
