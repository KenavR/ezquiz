import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizService, CategorizedQuizzes } from '@ezquiz/common';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ezq-quizzes-container',
  template: `
    <ezq-quizzes [quizzes]="quizzes$ | async" [loading]="loading"></ezq-quizzes>
  `,
  styles: []
})
export class QuizzesContainer implements OnInit {
  quizzes$: Observable<CategorizedQuizzes>;
  loading = false;

  constructor(private quizService: QuizService) {
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  ngOnInit(): void {
    this.loading = true;
    this.quizzes$ = this.quizService
      .loadQuizzesByCategories([
        { id: 'sdkdfk', name: 'Animals' },
        { id: 'sjkdjk', name: 'World' },
        { id: 'fdgsdfg', name: 'Nature' },
        { id: 'cvcv', name: 'Technology' },
        { id: 'cvbcvb', name: 'Pop Culture' },
        { id: 'ioioh', name: 'History' }
      ])
      .pipe(tap(this.toggleLoading));
  }

  private toggleLoading() {
    this.loading = !this.loading;
  }
}
