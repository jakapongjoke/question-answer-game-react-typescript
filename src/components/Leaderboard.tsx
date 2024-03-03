
import React from 'react';

interface LeaderboardProps {
  userAnswers: number[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ userAnswers }) => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <ol>
        {userAnswers.map((answer, index) => (
          <li key={index}>Question {index + 1}: Option {answer + 1}</li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;