import React from 'react';
import { QuestionProps } from '../interfaces/questionProps';

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option: string, index: number) => (
          <li key={index} onClick={() => onAnswer(index)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;