import { Injectable } from '@angular/core';
import { Auth, RecaptchaVerifier } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUser$: Observable<firebase.User | null> = this.fireAuth.user;
  isLoggedIn$: Observable<boolean> = this.authUser$.pipe(map(authUser => !!authUser));

  constructor(private fireAuth: AngularFireAuth, private auth: Auth) {
  }

  signInWithGoogle() {
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signInWithGithub() {
    this.fireAuth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  async signInWithPhonenumber(): Promise<firebase.auth.UserCredential> {
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': (response: string) => console.log('solved recaptcha', { response }),
      'expired-callback': () => console.log('recaptcha expired')
    }, this.auth);
    const result = await this.fireAuth.signInWithPhoneNumber('+4587654321', recaptchaVerifier);
    return result.confirm('123456');
  }

  signInWithEmailPassword({ email, password }: { email: string, password: string; }) {
    this.fireAuth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }

  logout(): Promise<void> {
    return this.fireAuth.signOut();
  }

}
