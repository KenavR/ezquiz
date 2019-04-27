import { Question } from './question';

export interface Quiz {
  id?: string;
  title: string;
  category: string;
  reward: number;
  imagePath?: string;
  description?: string;
  timePerQuestion?: number; // in seconds, default 30sec
  questions?: Question[];
  createdAt?: object;
}

export interface CategorizedQuizzes {
  [category: string]: Quiz[];
}
