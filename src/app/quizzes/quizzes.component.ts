import { Input, Component } from '@angular/core';

import { CategorizedQuizzes, Category } from '@ezquiz/models';

@Component({
  selector: 'ezq-quizzes',
  template: `
    <span *ngIf="loading">loading...</span>
    <ul *ngIf="!loading">
      <li *ngFor="let cat of quizzes | keyvalue">
        <div class="title-bar">
          <h3>
            {{ cat.key }}
            <span title="Number of Quizzes" class="quiz-count"
              >0/{{ cat.value.length }}</span
            >
          </h3>
          <span title="Max Reward" class="max-reward"
            >💰 {{ calcMaxRewards(cat.key) }}</span
          >
        </div>

        <ezq-sidescroller>
          <ezq-quiz-card
            [quiz]="quiz"
            *ngFor="let quiz of cat.value"
            class="quiz-card"
          >
          </ezq-quiz-card>
        </ezq-sidescroller>
      </li>
    </ul>
  `,
  styles: [
    `
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .title-bar {
        display: flex;
        align-items: center;

        padding: 0 1rem;
        margin: 2rem 0 1rem;
      }

      .max-reward {
        color: white;
      }

      h3 {
        flex: 1;
        margin: 0;
        color: #2f175e;
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
        font-weight: 100;
      }

      .quiz-card {
        position: relative;
        margin-right: 1rem;
      }

      .quiz-count {
        background-color: white;
        color: #2f175e;
        border-radius: 1rem;
        padding: 0.2rem 0.5rem;
        font-size: 0.7rem;
        font-weight: 100;
        margin-left: 0.5rem;
      }
    `
  ]
})
export class QuizzesComponent {
  @Input() quizzes: CategorizedQuizzes;
  @Input() loading = false;

  calcMaxRewards(category: string): number {
    return this.quizzes[category].reduce((sum, quiz) => sum + quiz.reward, 0);
  }
}
