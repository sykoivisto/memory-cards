import React from "react";

const Scoreboard = (props) => {

  return (
    <div>
      <div>
        <p>Current Score:</p>
        <p>{props.score}</p>
      </div>
      <div>
        <p>Best Score:</p>
        <p>{props.bestScore}</p>
      </div>
    </div>
  )
}

export default Scoreboard