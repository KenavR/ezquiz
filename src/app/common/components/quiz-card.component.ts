import { Input, Component } from '@angular/core';
import { Quiz } from '@ezquiz/models';

@Component({
  selector: 'ezq-quiz-card',
  template: `
    <ezq-card [title]="quiz.title" [image]="quiz.imagePath">
      <div class="quiz-credit">💰 {{ quiz.reward }}</div>
    </ezq-card>
  `,
  styles: [
    `
      .quiz-credit {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        color: rgba(0, 0, 0, 0.7);
        font-size: 0.8rem;
      }
    `
  ]
})
export class QuizCardComponent {
  @Input() quiz: Quiz;
}
