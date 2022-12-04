import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiShellModule } from '@coscore/shell';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
