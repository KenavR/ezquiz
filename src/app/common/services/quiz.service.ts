import { Injectable } from '@angular/core';
import { Observable, from, isObservable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Quiz, CategorizedQuizzes } from '@ezquiz/models';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference
} from '@angular/fire/firestore';
import { EzquizCommonModule } from '../ezquiz-common.module';

@Injectable({
  providedIn: EzquizCommonModule
})
export class QuizService {
  private quizzesCollection: AngularFirestoreCollection<Quiz>;
  private quizzes$: Observable<Quiz[]>;

  constructor(private db: AngularFirestore) {
    this.quizzesCollection = db.collection('quizzes');
  }

  public getQuizzes(): Observable<Quiz[]> {
    if (!isObservable(this.quizzes$)) {
      this.quizzes$ = this.quizzesCollection.valueChanges();
    }

    return this.quizzes$;
  }

  public getCategorizedQuizzes(): Observable<CategorizedQuizzes> {
    function categorize(quizzes: Quiz[]): CategorizedQuizzes {
      return quizzes.reduce((categorized, quiz) => {
        if (!categorized.hasOwnProperty(quiz.category)) {
          categorized[quiz.category] = [];
        }

        categorized[quiz.category].push(quiz);
        return categorized;
      }, {});
    }

    if (!isObservable(this.quizzes$)) {
      this.quizzes$ = this.quizzesCollection.valueChanges();
    }

    return this.quizzes$.pipe(map(categorize));
  }

  public saveQuiz(quiz: Quiz): Observable<any> {
    return from(this.quizzesCollection.add(quiz)).pipe(
      map((ref: DocumentReference) => ref as any)
    );
  }

  public saveAll(quizzes: Quiz[]): Observable<void> {
    const batch = this.db.firestore.batch();

    const quizzesRefs = quizzes.map(q => ({
      ref: this.db.collection('quizzes').doc(this.db.createId()).ref,
      data: q
    }));

    quizzesRefs.forEach(doc => batch.set(doc.ref, doc.data));
    return from(batch.commit());
  }
}
