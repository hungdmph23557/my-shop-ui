import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthModule } from './auth.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Đăng nhập',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, RouterOutlet],
})
export class AuthRoutingModule {}
