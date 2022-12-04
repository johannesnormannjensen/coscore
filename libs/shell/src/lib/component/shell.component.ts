import { Component, inject } from '@angular/core';
import { AuthService } from '@coscore/service';

@Component({
  selector: 'coscore-shell',
  templateUrl: 'shell.component.html',
  styleUrls: ['shell.component.scss'],
})
export class ShellComponent {

  isLoggedIn$ = inject(AuthService).isLoggedIn$;

}
