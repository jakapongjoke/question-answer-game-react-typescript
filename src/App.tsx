import React, { useEffect, useState } from 'react';
import Question from './components/Question';
import Leaderboard from './components/Leaderboard';
import { Question as QuestionType } from './interfaces/question';
import { QuestionProps } from './interfaces/questionProps';
import { questions } from './data/questions';

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType | null>(null);
  const [allQuestion, setAllQuestion] = useState<QuestionType[] | []>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [firstRender, setFirstRender] = useState<boolean>(false);

  useEffect(() => {
   console.log(allQuestion,"sss")
      if(allQuestion.length==0&&firstRender===false){
        setAllQuestion(questions)
        setCurrentQuestion(allQuestion[Math.floor(Math.random() * allQuestion.length)])
        setFirstRender(true)

      }
      else if(allQuestion.length==0&&firstRender===true){
        setCurrentQuestion(null)

      }else{
        setCurrentQuestion(allQuestion[Math.floor(Math.random() * allQuestion.length)])

      }
   


  }, [allQuestion]);

  const handleAnswer = (selectedOption: number) => {
  
    setUserAnswers([...userAnswers, selectedOption]);
    console.log(userAnswers)
    if(currentQuestion){
          const remainingQuestions = allQuestion.filter((q,index,arr) => q.id!==currentQuestion.id);
    setAllQuestion(remainingQuestions)

    }

    const nextQuestion = allQuestion[Math.floor(Math.random() * allQuestion.length)];


    setCurrentQuestion(nextQuestion || null);
    console.log(allQuestion)

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