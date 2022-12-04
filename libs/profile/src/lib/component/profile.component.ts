import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@coscore/service';

@Component({
  selector: 'coscore-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
})
export class ProfileComponent {
  displayName = 'Nightb';

  category = 'Foosball';
  rank = 11;

  fg = this.fb.group({
    displayName: this.fb.control(this.displayName, Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private cd: ChangeDetectorRef
  ) {
  }

  async logout(): Promise<void> {
    await this.authService.logout();
    this.router.navigate(['/']);
  }

}
