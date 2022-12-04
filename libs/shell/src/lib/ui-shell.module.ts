import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth, RecaptchaVerifier } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { IonicModule } from '@ionic/angular';
import { ShellComponent } from './component/shell.component';
import { firebaseConfig } from './firebase-config';
import { UIShellRoutingModule } from './ui-shell-routing.module';

declare global {
  interface Window { recaptchaVerifier: RecaptchaVerifier; }
}

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    UIShellRoutingModule,
  ],
  exports: [ShellComponent],
  providers: [
    {
      provide: FIREBASE_OPTIONS,
      useValue: firebaseConfig,
    },
  ]
})
export class UiShellModule { }
