import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, from, combineLatest } from 'rxjs';
import { tap, first, flatMap, filter, map } from 'rxjs/operators';

import { Question, Quiz } from '@ezquiz/models';

@Injectable()
export class InitializationService {
  constructor(private db: AngularFirestore) {}

  private doesCollectionExist<T>(name: string): Observable<boolean> {
    return this.db
      .collection<T>(name)
      .get()
      .pipe(
        first(),
        map((result: QuerySnapshot<Question>) => !result.empty)
      );
  }

  private createCollection<T>(name: string, data: T): Observable<void> {
    console.log('create collection');
    return from(
      this.db
        .collection<T>(name)
        .doc(this.db.createId())
        .set(data)
    );
  }

  init(): Observable<void[]> {
    function createQuizzes(this: InitializationService): Observable<void> {
      return this.doesCollectionExist<Quiz>('quizzes').pipe(
        filter(exists => !exists),
        flatMap(_ =>
          this.createCollection<Quiz>('quizzes', {
            category: 'Gameshows',
            description: '',
            imagePath: '',
            reward: 890,
            timePerQuestion: 30,
            title: 'Who wants to be a Millionaire?'
          })
        )
      );
    }
    function createQuestions(this: InitializationService): Observable<void> {
      return this.doesCollectionExist<Question>('questions').pipe(
        filter(exists => !exists),
        flatMap(_ =>
          this.createCollection<Question>('questions', {
            text:
              'Which disease devastated livestock across the UK during 2001?',
            answer: 'Foot-and-mouth',
            options: ['Hand-and-foot', 'Foot-in-mouth', 'Hand-to-mouth'],
            quiz: '1'
          })
        )
      );
    }
    return combineLatest(createQuizzes.call(this), createQuestions.call(this));
  }
}
