import { Component, OnInit } from '@angular/core';
// import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'angular-google';
  user: any;
  loggedIn: any;

  // constructor(private authService: SocialAuthService) {}

  // ngOnInit() {
  //   this.authService.authState.subscribe((user) => {
  //     this.user = user;
  //     this.loggedIn = user != null;
  //     console.log(this.user);
  //   });
  // }
}
