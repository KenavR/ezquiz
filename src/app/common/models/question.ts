export interface Question {
  id?: string;
  text: string;
  answer: string;
  options: string[];
  quiz: string; // id to quiz
}
