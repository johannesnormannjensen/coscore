import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ShellComponent } from './component/shell.component';
import { UIShellRoutingModule } from './ui-shell-routing.module';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, IonicModule.forRoot(), UIShellRoutingModule],
  exports: [ShellComponent],
})
export class UiShellModule {}
