import { Question as QuestionType } from './question';

export interface QuestionProps {
  question: QuestionType;
  onAnswer: (selectedOption: number) => void;
}