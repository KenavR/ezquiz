import { Category } from './category';
import { Question } from './question';

export interface Quiz {
  id: string;
  title: string;
  category: Category;
  reward: number;
  imagePath?: string;
  description?: string;
  timePerQuestion?: number; // in seconds, default 30sec
  questions: Question[];
}

export interface CategorizedQuizzes {
  [category: string]: Quiz[];
}
