import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, from, combineLatest } from 'rxjs';
import { first, flatMap, filter, map, tap } from 'rxjs/operators';
import { QuizService } from './quiz.service';
import * as firebase from 'firebase';
import quizzesData from '../../../data/quizzes';
import { Quiz } from '@ezquiz/models';
import { EzquizCommonModule } from '../ezquiz-common.module';

@Injectable({
  providedIn: EzquizCommonModule
})
export class InitializationService {
  constructor(private db: AngularFirestore, private quizService: QuizService) {}

  private doesCollectionExist<T>(name: string): Observable<boolean> {
    return this.db
      .collection<T>(name)
      .get()
      .pipe(
        first(),
        map((result: QuerySnapshot<T>) => !result.empty)
      );
  }

  init(): Observable<void[]> {
    function importData(this: InitializationService): Observable<void>[] {
      const quizzes = (quizzesData as Quiz[]).map(q => {
        const dbQuiz = { ...q };
        delete dbQuiz.questions;
        dbQuiz.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        return dbQuiz;
      });

      const quiz$ = this.doesCollectionExist<object>('quizzes').pipe(
        filter(exists => !exists),
        flatMap(_ => this.quizService.saveAll(quizzes))
      );

      return [quiz$];
    }

    return combineLatest(...importData.call(this));
  }
}
