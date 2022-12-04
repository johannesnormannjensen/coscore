import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './component/login/login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}
