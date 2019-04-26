import { Injectable } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { single, delay, map } from 'rxjs/operators';

import { CategorizedQuizzes, Category, Quiz } from '@ezquiz/models';

function getRandomQuizzes(category: Category, amount: number): Quiz[] {
  return Array.apply(null, { length: amount })
    .map(Number.call, Number)
    .map(_ => getRandomQuiz(category));
}

// Source: https://gamefaqs.gamespot.com/gba/919785-who-wants-to-be-a-millionaire-2nd-edition/faqs/40044
function getRandomQuiz(category: Category): Quiz {
  return {
    id: Math.random()
      .toString(36)
      .substring(7),
    title: 'Who wants to be a millionaire?',
    category,
    reward: Math.floor(Math.random() * 1000),
    questions: [
      {
        text: `Which disease devastated livestock across the UK during 2001?`,
        answer: 'Foot-and-mouth',
        options: ['Hand-and-foot', 'Foot-in-mouth', 'Hand-to-mouth'],
        quiz: '1'
      },
      {
        text: `Which of these kills its victims by constriction?`,
        answer: 'Anaconda',
        options: ['Andalucia', 'Andypandy', 'Annerobinson'],
        quiz: '1'
      },
      {
        text: `Which of these might be used in underwater naval operations?`,
        answer: 'Frogmen',
        options: ['Newtmen', 'Toadmen', 'Tadpolemen'],
        quiz: '1'
      }
    ]
  };
}

@Injectable()
export class QuizService {
  public loadQuizzesByCategories(
    categories: Category[]
  ): Observable<CategorizedQuizzes> {
    const loadingQuizzes: Observable<Quiz[]>[] = categories.map(category =>
      of(getRandomQuizzes(category, Math.floor(Math.random() * 10) + 1)).pipe(
        single()
      )
    );

    function reduceToCategorized(categorized: Quiz[][]) {
      return categorized.reduce(
        (acc: CategorizedQuizzes, quizzes: Quiz[]) => ({
          ...acc,
          [quizzes[0].category.hasOwnProperty('name')
            ? (quizzes[0].category as Category).name
            : '']: quizzes
        }),
        {}
      );
    }

    return combineLatest(loadingQuizzes).pipe(
      map(reduceToCategorized),
      delay(2000),
      single()
    );
  }
}
