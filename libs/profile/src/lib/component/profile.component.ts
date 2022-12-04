import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
  })

  constructor(private fb: FormBuilder){
  }

}
