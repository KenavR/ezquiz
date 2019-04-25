import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MainHeaderContainer,
  MainHeaderComponent,
  MainLayoutComponent
} from '@ezquiz/main';
import { QuizzesContainer, QuizzesComponent } from '@ezquiz/quizzes';
import { LoginModule } from '@ezquiz/login';
import { EzquizCommonModule } from './common';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderContainer,
    MainHeaderComponent,
    MainLayoutComponent,
    QuizzesContainer,
    QuizzesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, LoginModule, EzquizCommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
