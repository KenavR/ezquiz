import { Category } from '@ezquiz/models';

export interface EzqUser {
  email: string;
  username: string;
  credit: number;
  emoji: string;
  firstname?: string;
  lastname?: string;
  favoriteCategories?: Category[];
}
