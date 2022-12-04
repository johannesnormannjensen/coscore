import { NgModule } from '@angular/core';
import { SETTINGS as AUTH_SETTINGS, USE_DEVICE_LANGUAGE } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { COSCORE_ENVIRONMENT } from '@coscore/service';
import { UiShellModule } from '@coscore/shell';
import { IonicRouteStrategy } from '@ionic/angular';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiShellModule],
  bootstrap: [AppComponent],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: COSCORE_ENVIRONMENT, useValue: environment },
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: !!environment.appVerificationDisabledForTesting } },
    { provide: USE_DEVICE_LANGUAGE, useValue: true },
  ],
})
export class AppModule { }
