import React, { useEffect, useState } from 'react';
import Question from './components/Question';
import Leaderboard from './components/Leaderboard';
import { Question as QuestionType } from './interfaces/question';
import { QuestionProps } from './interfaces/questionProps';
import { questions } from './data/questions';

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  useEffect(() => {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 20);
    setCurrentQuestion(shuffledQuestions[0]);
  }, []);

  const handleAnswer = (selectedOption: number) => {
    setUserAnswers([...userAnswers, selectedOption]);
    const remainingQuestions = questions.filter((q) => !userAnswers.includes(q.id));
    const nextQuestion = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
    setCurrentQuestion(nextQuestion || null);
  };

  return (
    <div>
      {currentQuestion ? (
        <Question question={currentQuestion} onAnswer={handleAnswer} />
      ) : (
        <Leaderboard userAnswers={userAnswers} />
      )}
    </div>
  );
};

export default App;