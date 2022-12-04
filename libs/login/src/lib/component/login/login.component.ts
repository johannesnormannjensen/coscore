import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@coscore/service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'coscore-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router,
  ) {
  }

  async signInWithPhonenumber(): Promise<void> {
    const loading = await this.loadingCtrl.create({ message: 'Logging in...' });
    loading.present();
    await this.authService.signInWithPhonenumber();
    this.router.navigate(['/']);
    loading.dismiss();
  }

}
