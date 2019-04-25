import { Category } from '@ezquiz/models';

export interface User {
  id: string;
  username: string;
  credit: number;
  favoriteCategories: Category[];
}
