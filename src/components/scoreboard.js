import React, { useState, useEffect } from "react";

const Scoreboard = (score) => {

  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const updateBestScore = (score) => {
      if (score > bestScore) setBestScore(score);
    };
    updateBestScore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score])

  return (
    <div>
      <div>
        <p>Current Score:</p>
        <p>{score}</p>
      </div>
      <div>
        <p>Best Score:</p>
        <p>{bestScore}</p>
      </div>
    </div>
  )
}

export default Scoreboard