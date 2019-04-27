import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzesContainer } from './quizzes';
import { LoginContainer } from './login/login.controller';
import { EzquizCommonModule, AuthGuard } from '@ezquiz/common';

const routes: Routes = [
  {
    path: 'quiz',
    component: QuizzesContainer,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginContainer
  },
  {
    path: 'signup',
    component: LoginContainer
  },
  { path: '', redirectTo: '/quiz', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EzquizCommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
