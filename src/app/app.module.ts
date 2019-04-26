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
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderContainer,
    MainHeaderComponent,
    MainLayoutComponent,
    QuizzesContainer,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    AppRoutingModule,
    LoginModule,
    EzquizCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
