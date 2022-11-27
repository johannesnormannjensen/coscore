import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'coscore-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  isNative = Capacitor.getPlatform()
}
