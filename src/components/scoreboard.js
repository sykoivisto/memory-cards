import React, { useState, useEffect } from "react";

const Scoreboard = (props) => {

  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const updateBestScore = (score) => {
      if (score > bestScore) setBestScore(score);
    };
    updateBestScore(props.score);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.score])

  return (
    <div>
      <div>
        <p>Current Score:</p>
        <p>{props.score}</p>
      </div>
      <div>
        <p>Best Score:</p>
        <p>{bestScore}</p>
      </div>
    </div>
  )
}

export default Scoreboard