import { Component, OnInit } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router'; // Optional: For routing after login
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  socialUser!: SocialUser;
  isLoggedIn = false;

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {} // Inject Router for routing after login (optional)

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedIn = user != null;
    });
  }

  loginWithGoogle() {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        this.socialUser = user;
        this.isLoggedIn = true;
        console.log('Logged in:', user);
        // Optional: Route to a different page after successful login
        this.router.navigate(['/about']);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
