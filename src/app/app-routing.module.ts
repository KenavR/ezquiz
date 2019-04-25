import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzesContainer } from './quizzes';

const routes: Routes = [
  {
    path: 'quiz',
    component: QuizzesContainer
  },
  { path: '', redirectTo: '/quiz', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
