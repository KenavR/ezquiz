import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderContainer, MainHeaderComponent } from '@ezquiz/main';
import { UserService, QuizService } from '@ezquiz/services';
import { QuizzesContainer, QuizzesComponent } from '@ezquiz/quizzes';
import { CardComponent, SidescrollerComponent } from '@ezquiz/components';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderContainer,
    MainHeaderComponent,
    QuizzesContainer,
    QuizzesComponent,

    CardComponent,
    SidescrollerComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule {}
