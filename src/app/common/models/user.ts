export interface User {
  id: string;
  username: string;
  credit: number;
}

export interface UserState {
  user: User;
  loading: boolean;
}
