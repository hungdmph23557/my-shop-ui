import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
  ],
  // providers: [
  //   {
  //     provide: 'SocialAuthServiceConfig',
  //     useValue: {
  //       autoLogin: false,
  //       providers: [
  //         {
  //           id: GoogleLoginProvider.PROVIDER_ID,
  //           provider: new GoogleLoginProvider(
  //             '268929030979-49cvl45n2hea8ni7e3k1jolv84p9dorj.apps.googleusercontent.com'
  //           ),
  //         },
  //       ],
  //       onError: (err) => {
  //         console.error(err);
  //       },
  //     } as SocialAuthServiceConfig,
  //   },
  // ],
})
export class AuthModule {}
