import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServices } from 'src/app/services/user-services.service';
import { SuccessfulLoginServerResponse } from '../Model/SuccessfulLoginServerResponse';
import { UserLoginDetails } from '../Model/UserLoginDetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLoginDetails: UserLoginDetails = new UserLoginDetails('', '');
  constructor(private userServices: UsersServices, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    let loginObservable = this.userServices.login(this.userLoginDetails);
    loginObservable.subscribe(
      (successfulServerRequestData) => {
        console.log(successfulServerRequestData);
        this.userServices.userRole = successfulServerRequestData.userRole;
        sessionStorage.setItem("userRole",successfulServerRequestData.userRole)
        sessionStorage.setItem(
          'token',
          'Bearer ' + successfulServerRequestData.token + ''
        );
        if (successfulServerRequestData.userRole === 'Admin') {
          this.router.navigate(['/admin']);
          return;
        }

        this.router.navigate(['/customer']);
      },
      (serverErrorResponse) => {
        // Reaching here means that the server had failed
        // serverErrorResponse is the object returned from the ExceptionsHandler
        alert(
          'Error! Status: ' +
            serverErrorResponse.status +
            ', Message: ' +
            serverErrorResponse.message
        );
      }
    );
  }
}
