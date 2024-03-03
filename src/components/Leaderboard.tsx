
import React, { useEffect, useState } from 'react';
import { questions } from '../data/questions';

interface LeaderboardProps {
  userAnswers: number[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ userAnswers }) => {
    const [score,setScore] = useState<number>(0);
    const countScore = ()=>{
        let theScore = 0 ;
        for(let i =0 ; i < questions.length ; i++ ) {
            if(userAnswers[i] == questions[i].correctOption){
                theScore+=1
            }
        }
        setScore(theScore);
    }

 useEffect(()=>{
    countScore()
 })
  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {userAnswers.map((answer, index) => (
          <li key={index}>Question {index + 1}: Option {answer + 1}</li>
        ))}
      </ol>
      <div>
        your Score is : {score}
    </div>
    </div>
    
  );
};



export default Leaderboard;