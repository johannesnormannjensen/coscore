import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { IonicModule } from '@ionic/angular';
import { ShellComponent } from './component/shell.component';
import { firebaseConfig } from './firebase-config';
import { UIShellRoutingModule } from './ui-shell-routing.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule, 
    IonicModule.forRoot(), 
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    UIShellRoutingModule,
  ],
  exports: [ShellComponent],
})
export class UiShellModule {}
