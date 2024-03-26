import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { SharedModule } from './shared/shared.module';
import { AppFooterComponent } from './layouts/app-footer/app-footer.component';
import { AppHeaderComponent } from './layouts/app-header/app-header.component';
import { AppMainComponent } from './layouts/app-main/app-main.component';
import { AboutComponent } from './about/about.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { enviroment } from 'src/enviroment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterLink } from '@angular/router';
// import { QRCodeModule } from 'angular2-qrcode';
import { ButtonModule } from 'primeng/button';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppMainComponent,
    AboutComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DataModule,
    SharedModule,
    SocialLoginModule,
    FlexLayoutModule,
    RouterLink,
    ButtonModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(enviroment.authKey),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
