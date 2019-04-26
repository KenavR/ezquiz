import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, from, combineLatest } from 'rxjs';
import { first, flatMap, filter, map } from 'rxjs/operators';

interface RequiredCollections {
  [name: string]: object;
}

const requiredCollections: RequiredCollections = {
  quizzes: {
    category: 'Gameshows',
    description: '',
    imagePath: '',
    reward: 890,
    timePerQuestion: 30,
    title: 'Who wants to be a Millionaire?'
  },
  questions: {
    text: 'Which disease devastated livestock across the UK during 2001?',
    answer: 'Foot-and-mouth',
    options: ['Hand-and-foot', 'Foot-in-mouth', 'Hand-to-mouth'],
    quiz: '1'
  }
};

@Injectable()
export class InitializationService {
  constructor(private db: AngularFirestore) {}

  private doesCollectionExist<T>(name: string): Observable<boolean> {
    return this.db
      .collection<T>(name)
      .get()
      .pipe(
        first(),
        map((result: QuerySnapshot<T>) => !result.empty)
      );
  }

  private createCollection<T>(name: string, data: T): Observable<void> {
    return from(
      this.db
        .collection<T>(name)
        .doc(this.db.createId())
        .set(data)
    );
  }

  private processCollection([name, data]: [string, object]): Observable<void> {
    return this.doesCollectionExist<object>(name).pipe(
      filter(exists => !exists),
      flatMap(_ => this.createCollection<object>(name, data))
    );
  }

  init(): Observable<void[]> {
    const collectionCreator$: Observable<void>[] = Object.entries(
      requiredCollections
    ).map(this.processCollection.bind(this));

    return combineLatest(...collectionCreator$);
  }
}
