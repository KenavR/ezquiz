import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzesContainer } from './quizzes';
import { LoginContainer } from './login/login.controller';

const routes: Routes = [
  {
    path: 'quiz',
    component: QuizzesContainer
  },
  {
    path: 'login',
    component: LoginContainer
  },
  { path: '', redirectTo: '/quiz', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
