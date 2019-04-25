import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderContainer, MainHeaderComponent } from '@ezquiz/main';
import { UserService } from '@ezquiz/common';

@NgModule({
  declarations: [AppComponent, MainHeaderContainer, MainHeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
