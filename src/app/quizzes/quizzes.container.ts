import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizService, CategorizedQuizzes } from '@ezquiz/common';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ezq-quizzes-container',
  template: `
    <ezq-layout>
      <ezq-quizzes
        [quizzes]="quizzes$ | async"
        [loading]="loading"
      ></ezq-quizzes>
    </ezq-layout>
  `,
  styles: [
    `
      :host {
        height: inherit;
      }
    `
  ]
})
export class QuizzesContainer implements OnInit {
  quizzes$: Observable<CategorizedQuizzes>;
  loading = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.loading = true;
    this.quizzes$ = this.quizService
      .getCategorizedQuizzes()
      .pipe(tap(this.setLoading.bind(this, false)));

    /*.loadQuizzesByCategories([
        { id: 'sdkdfk', name: 'Animals' },
        { id: 'sjkdjk', name: 'World' },
        { id: 'fdgsdfg', name: 'Nature' },
        { id: 'cvcv', name: 'Technology' },
        { id: 'cvbcvb', name: 'Pop Culture' },
        { id: 'ioioh', name: 'History' }
      ])*/
  }

  private setLoading(isLoading: boolean) {
    this.loading = isLoading;
  }
}
