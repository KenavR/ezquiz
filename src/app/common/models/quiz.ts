import { Category } from './category';
import { Question } from './question';

export interface Quiz {
  id: string;
  category: Category;
  reward: number;
  imagePath: string;
  description: string;
  timePerQuestion: number; // in seconds
  questions: Question[];
}
